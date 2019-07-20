const mongoose = require('mongoose');
const {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY
} = require('../../constants/days');

const Schedule = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  areasAffected: {
    type: Array,
    default: []
  },
  timeStart: {
    type: String,
    required: true
  },
  timeEnd: {
    type: String,
    required: true
  },
  repeatDays: {
    type: Array,
    required: true
  },
  heatingEnabled: {
    type: Boolean,
    required: true
  },
  targetTemperature: {
    type: Number,
    default: null
  }
});

function setDays(days) {
  if (days.length === 0) {
    this.repeatDays = [MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY];
  }
  const addDayToArray = (currentDays, day) =>
    currentDays.includes(day) ? currentDays : [...currentDays, day];
  this.repeatDays = days.reduce((currentDays, day) => {
    switch (day) {
      case MONDAY:
        return addDayToArray(MONDAY);
      case TUESDAY:
        return addDayToArray(TUESDAY);
      case WEDNESDAY:
        return addDayToArray(WEDNESDAY);
      case THURSDAY:
        return addDayToArray(THURSDAY);
      case FRIDAY:
        return addDayToArray(FRIDAY);
      case SATURDAY:
        return addDayToArray(SATURDAY);
      case SUNDAY:
        return addDayToArray(SUNDAY);
      default:
        return currentDays;
    }
  }, []);
}

Schedule.methods.setDays = setDays;

module.exports = mongoose.Model('Schedule', Schedule);
