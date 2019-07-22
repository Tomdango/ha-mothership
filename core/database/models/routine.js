const mongoose = require('mongoose');
const logger = require('../../logging')('mongoose');

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

mongoose.model('Routine', Routine);
logger.debug('Model loaded: Routine');
