const mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');
const Hertzy = require('hertzy');
const logging = require('../../logging');

const logger = logging('mongoose');
const internalLog = logging('mongoose:area');
const frequency = Hertzy.tune(`Datafeed::Area`);
const AreaHistory = mongoose.model('AreaHistory');

const feed = (type, areaId, data) => {
  frequency.emit('Update', {
    type,
    areaId,
    data
  });
};

const Routine = new mongoose.Schema({
  timeStart: {
    type: String,
    required: true
  },
  timeEnd: {
    type: String,
    required: true
  },
  heatingEnabled: {
    type: Boolean,
    required: true
  },
  repeat: {
    type: Array,
    required: true
  },
  targetTemperature: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

const AreaSchema = new mongoose.Schema(
  {
    areaId: {
      type: String,
      required: true,
      default: uuidv4,
      unique: true
    },
    tempLastChanged: {
      type: Number,
      default: null
    },
    humidityLastChanged: {
      type: Number,
      default: null
    },
    name: {
      type: String,
      required: true
    },
    historyId: {
      type: String,
      default: null
    },
    temperature: {
      type: Number,
      default: null
    },
    humidity: {
      type: Number,
      default: null
    },
    targetTemperature: {
      type: Number,
      default: null
    },
    heatingEnabled: {
      type: Boolean,
      default: true
    },
    routines: [Routine],
    registeredNodes: {
      type: Array,
      default: []
    }
  },
  { timestamps: true }
);

const createNewHistory = areaId => {
  return new Promise(resolve => {
    const History = new AreaHistory({
      areaId,
      tempHistory: [],
      humHistory: []
    });
    History.save().then(doc => {
      resolve(doc.areaId);
    });
  });
};

async function updateTemperature(newTemp) {
  feed('TempUpdate', this.areaId, { temperature: newTemp });
  if (this.historyId === null) {
    internalLog.info(`Creating History for ${this.areaId}`);
    const historyId = await createNewHistory(this.areaId);
    this.historyId = historyId;
    this.tempLastChanged = new Date();
    this.temperature = newTemp;
    internalLog.silly(`Temperature updated for ${this.areaId} | ${newTemp}C`);
    return true;
  }
  const { temperature, tempLastChanged } = this;
  if (newTemp !== temperature) {
    const timeNow = new Date();
    this.temperature = newTemp;
    this.tempLastChanged = timeNow;
    internalLog.silly(`Temperature updated for ${this.areaId} | ${newTemp}C`);
    const history = await AreaHistory.findOne({ areaId: this.areaId });
    history.updateTemperature(temperature, tempLastChanged, timeNow);
    await history.save();
    return true;
  }
}

async function updateHumidity(newHum) {
  feed('HumUpdate', this.areaId, { humidity: newHum });
  if (this.historyId === null) {
    internalLog.info(`Creating History for ${this.areaId}`);
    const historyId = await createNewHistory(this.areaId);
    this.historyId = historyId;
    this.humidityLastChanged = new Date();
    this.humidity = newHum;
    internalLog.silly(`Humidity updated for ${this.areaId} | ${newHum}%`);
    return true;
  }
  const { humidity, humidityLastChanged } = this;
  if (newHum !== humidity) {
    const timeNow = new Date();
    this.humidity = newHum;
    internalLog.silly(`Humidity updated for ${this.areaId} | ${newHum}%`);
    this.humidityLastChanged = timeNow;
    const history = await AreaHistory.findOne({ areaId: this.areaId });
    history.updateHumidity(humidity, humidityLastChanged, timeNow);
    await history.save();
    return true;
  }
}

function setTarget(target) {
  feed('TargetSet', this.areaId, { targetTemperature: target });
  return new Promise((resolve, reject) => {
    if (typeof target === 'number') {
      this.targetTemperature = target;
      internalLog.silly(`Target updated for ${this.areaId} | ${target}C`);
      resolve(this);
    } else {
      reject(new mongoose.Error('Target Temperature must be a number'));
    }
  });
}

function clearLooseEnds() {
  return new Promise(resolve => {
    AreaHistory.deleteOne({ areaId: this.areaId }).then(() => {
      internalLog.info(`History for ${this.areaId} deleted`);
      resolve();
    });
  });
}

function addNode(nodeId) {
  const { registeredNodes } = this;
  const exists = registeredNodes.includes(nodeId);
  if (!exists) {
    registeredNodes.push(nodeId);
    feed('NodeAdd', this.areaId, { registeredNodes: [...registeredNodes, nodeId] });
    internalLog.verbose(`Node added to ${this.areaId} | ${nodeId}`);
  }
  this.registeredNodes = registeredNodes;
}

function addRoutine(routine) {
  if (routine.repeat.length === 0) {
    this.routines.push({
      ...routine,
      repeat: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
    });
    feed('NewRoutine', this.areaId, {
      routines: this.routines
    });
  } else {
    this.routines.push(routine);
    feed('NewRoutine', this.areaId, { routines: this.routines });
  }
  internalLog.verbose(`Routine added to ${this.areaId}`);
}

function removeRoutine(routineId) {
  // eslint-disable-next-line no-underscore-dangle
  const { routines } = this;
  const filteredRoutines = routines.filter(routine => routine.id !== routineId);
  this.routines = filteredRoutines;
  feed('RemoveRoutine', this.areaId, { routines: filteredRoutines });
  internalLog.verbose(`Routine removed from ${this.areaId} | routineId=${routineId}`);
}

function removeNode(nodeId) {
  const filteredNodes = this.registeredNodes.filter(node => node.nodeId !== nodeId);
  this.registeredNodes = filteredNodes;
  feed('RemoveNode', this.areaId, { registeredNodes: filteredNodes });
  internalLog.verbose(`Node removed from ${this.areaId} | nodeId=${nodeId}`);
}

function setNodes(nodes) {
  this.registeredNodes = nodes;
  feed('NodesSet', this.areaId, { registeredNodes: nodes });
  internalLog.verbose(`Nodes set for ${this.areaId}`);
}

function setHeatingEnabled(enabled) {
  this.heatingEnabled = enabled;
  feed('SetHeatingEnabled', this.areaId, { heatingEnabled: enabled });
  internalLog.verbose(`Heating ${enabled ? 'enabled' : 'disabled'} for ${this.areaId}`);
}

AreaSchema.methods.setTarget = setTarget;
AreaSchema.methods.updateTemperature = updateTemperature;
AreaSchema.methods.updateHumidity = updateHumidity;
AreaSchema.methods.addNode = addNode;
AreaSchema.methods.removeNode = removeNode;
AreaSchema.methods.addRoutine = addRoutine;
AreaSchema.methods.removeRoutine = removeRoutine;
AreaSchema.methods.clearLooseEnds = clearLooseEnds;
AreaSchema.methods.setNodes = setNodes;
AreaSchema.methods.setHeatingEnabled = setHeatingEnabled;

mongoose.model('Area', AreaSchema);
logger.debug('Model Loaded: Area');
