const mongoose = require('mongoose');
const logger = require('../logging')('routines:checker');

const Routine = mongoose.model('Routine');
const Area = mongoose.model('Area');

class RoutineMonitor {
  constructor() {
    this.routines = [];
    this.areas = [];
    this.actions = [];
  }

  async startup() {
    logger.info('Routine Monitor Starting...');
    this.routines = await Routine.find({});
    this.areas = await Area.find({});
    Promise.all([this.processRoutines(), this.processAreas()]);
  }

  processRoutines() {
    return new Promise(resolve => {
      this.routines.reduce((actions, routine) => {
        console.log(routine);
      }, []);
    });
  }

  processAreas() {
    // Map routines into a week
    const identifiedActions = this.areas.reduce((actions, area) => {
      const week = {
        mon: [],
        tue: [],
        wed: [],
        thu: [],
        fri: [],
        sat: [],
        sun: []
      };
      area.routines.forEach(routine => {
        const timeStart = new Date(routine.timeStart);
        const timeEnd = new Date(routine.timeEnd);
        routine.repeat.forEach(repeat => {
          week[repeat].push({
            routineId: routine.id,
            routineStatus: 'start',
            actionTime: routine.timeStart,
            heatingEnabled: routine.heatingEnabled,
            targetTemperature: routine.targetTemperature || null
          });
          week[repeat].push({
            routineId: routine.id,
            routineStatus: 'end',
            actionTime: routine.timeStart
          });
        });
      });

      const filtered = Object.keys(week).reduce((prev, key) => {
        if (week[key].length > 0) {
          return { ...prev, [key]: week[key] };
        }
        return prev;
      }, {});
      return { ...actions, [area.areaId]: filtered };
    }, {});

    // Filter out unused days
    // const filteredActions = Object.keys(identifiedActions).reduce((prev, next) => {
    // if (next !== {}) {
    // return { ...prev, ...next };
    // }
    // return prev;
    // }, {});
    // Filter out
    console.log(JSON.stringify(identifiedActions, null, 2));
  }
}

const checker = new RoutineMonitor();
checker.startup();

module.exports = RoutineMonitor;
