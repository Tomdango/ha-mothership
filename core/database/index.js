const mongoose = require('mongoose');
require('./models');

mongoose.connect('mongodb://localhost:27017/homeautomation_rc22', {
  useNewUrlParser: true,
  useCreateIndex: true
});
