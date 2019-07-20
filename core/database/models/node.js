const mongoose = require('mongoose');
const logger = require('../../logging')('mongoose');

const NodeSchema = new mongoose.Schema(
  {
    initialized: {
      type: Boolean,
      default: false,
      index: true
    },
    nodeId: {
      type: String,
      unique: true,
      index: true
    },
    lastIp: {
      type: String,
      required: true
    },
    name: {
      type: String,
      default: ''
    },
    status: {
      type: String,
      default: false
    },
    type: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

function initialize(name) {
  this.name = name;
  this.initialized = true;
}

function updateIp(ip) {
  this.lastIp = ip;
}

NodeSchema.methods.updateIp = updateIp;
NodeSchema.methods.initialize = initialize;

mongoose.model('Node', NodeSchema);
logger.debug('Model loaded: Node');
