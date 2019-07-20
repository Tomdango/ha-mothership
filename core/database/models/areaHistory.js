const mongoose = require('mongoose');
const logger = require('../../logging')('mongoose');

const AreaHistorySchema = new mongoose.Schema({
  areaId: {
    type: String,
    required: true,
    index: true
  },
  tempHistory: [
    {
      temp: Number,
      start: Date,
      end: Date,
      eventNumber: Number
    }
  ],
  humHistory: [
    {
      hum: Number,
      start: Date,
      end: Date,
      eventNumber: Number
    }
  ],
  eventNumberTemp: {
    type: Number,
    default: 0
  },
  eventNumberHum: {
    type: Number,
    default: 0
  }
});

function updateTemperature(oldTemp, timeUpdated, timeNow) {
  const { tempHistory, eventNumberTemp } = this;
  tempHistory.push({
    temp: oldTemp,
    start: timeUpdated,
    end: timeNow,
    eventNumberTemp
  });
  this.tempHistory = tempHistory;
  this.eventNumberTemp = eventNumberTemp + 1;
}

function updateHumidity(oldHum, timeUpdated, timeNow) {
  const { humHistory, eventNumberHum } = this;
  humHistory.push({
    hum: oldHum,
    start: timeUpdated,
    end: timeNow,
    eventNumberHum
  });
  this.humHistory = humHistory;
  this.eventNumberHum = eventNumberHum + 1;
}

AreaHistorySchema.methods.updateTemperature = updateTemperature;
AreaHistorySchema.methods.updateHumidity = updateHumidity;

mongoose.model('AreaHistory', AreaHistorySchema);
logger.debug('Model Loaded: AreaHistory');
