const router = require('express').Router();
const mongoose = require('mongoose');
const logger = require('../../core/logging')('controller:area');

const Area = mongoose.model('Area');
const AreaHistory = mongoose.model('AreaHistory');

router.use((req, res, next) => {
  req.log = (level, message) => {
    logger.log(level, `${message} | ip=${req.ip} route=${req.route}`);
  };
  next();
});

router.get('/', async (req, res) => {
  const results = await Area.find({});
  res.status(200).json(results);
});

router.post('/create', (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ message: 'Area name is required' });
  }
  const createdArea = new Area({ name });
  createdArea
    .validate()
    .then(() => {
      createdArea
        .save()
        .then(doc => {
          res.status(200).json({ document: doc });
        })
        .catch(err => {
          res.status(500).json(err);
        });
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get('/:areaId', (req, res) => {
  Area.findOne({ areaId: req.params.areaId })
    .then(document => {
      if (!document) {
        res.status(404).json({ message: 'Not Found' });
      } else {
        res.send(document);
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post('/:areaId/set-target', (req, res) => {
  const { target } = req.body;
  if (!target) {
    res.status(400).json({ message: 'Target is required' });
  }
  Area.findOne({ areaId: req.params.areaId })
    .then(document => {
      if (!document) {
        res.status(404).json({ message: 'Not Found' });
      } else {
        document
          .setTarget(target)
          .then(() => {
            document
              .save()
              .then(updatedDoc => {
                res.status(200).json(updatedDoc);
              })
              .catch(err => res.status(500).json(err));
          })
          .catch(err => {
            res.status(400).json(err);
          });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post('/:areaId/update-temperature', (req, res) => {
  const { temperature } = req.body;
  if (!temperature) {
    res.status(400).json({ message: 'Temperature is required' });
  }
  Area.findOne({ areaId: req.params.areaId })
    .then(document => {
      if (!document) {
        res.status(404).json({ message: 'Not Found' });
      } else {
        document.updateTemperature(temperature);
        document
          .save()
          .then(newDoc => {
            // eslint-disable-next-line no-underscore-dangle
            res.status(200).json({ ...newDoc._doc, temperatureHistory: null });
          })
          .catch(err => {
            res.status(500).json(err);
          });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post('/:areaId/add-routine', (req, res) => {
  const { routine } = req.body;
  if (!routine || typeof routine !== 'object') {
    return res.status(400).json({ message: 'Routine is required' });
  }
  const { name, timeStart, timeEnd, heatingEnabled, repeat, targetTemperature } = routine;
  if (
    typeof name === 'undefined' ||
    typeof timeStart === 'undefined' ||
    typeof timeEnd === 'undefined' ||
    typeof heatingEnabled === 'undefined' ||
    typeof repeat === 'undefined' ||
    typeof targetTemperature === 'undefined'
  ) {
    return res.status(400).json({ message: 'Invalid routine supplied' });
  }
  return Area.findOne({
    areaId: req.params.areaId
  })
    .then(document => {
      if (!document) {
        return res.status(404).json({ message: 'Not Found' });
      }
      document.addRoutine(routine);
      document
        .validate()
        .then(() => {
          document
            .save()
            .then(updatedDocument => {
              return res.status(200).json(updatedDocument);
            })
            .catch(err => {
              return res.status(500).json(err);
            });
        })
        .catch(err => {
          req.log('error', `Failed to add routine | error=${err.toString()}`);
          return res.status(500).json(err);
        });
    })
    .catch(err => res.status(500).json(err));
});

router.delete('/:areaId/routines/:routineId', (req, res) => {
  const { areaId, routineId } = req.params;
  Area.findOne({ areaId })
    .then(document => {
      if (!document) {
        return res.status(404).json({ message: 'Not Found' });
      }
      document.removeRoutine(routineId);
      return document
        .validate()
        .then(() => {
          return document
            .save()
            .then(updatedDocument => {
              return res.status(200).json(updatedDocument);
            })
            .catch(err => {
              req.log('error', `Failed to remove routine | error=${err.toString()}`);
              return res.status(500).json(err);
            });
        })
        .catch(err => {
          return res.status(400).json(err);
        });
    })
    .catch(err => {
      req.log('error', `Failed to remove routine | error=${err.toString()}`);
      res.status(500).json(err);
    });
});

router.get('/:areaId/temp-history', (req, res) => {
  const { areaId } = req.params;
  AreaHistory.findOne({ areaId }).then(history => {
    if (!history) {
      res.status(404).json({ message: 'Not Found' });
    } else {
      res.status(200).json(history);
    }
  });
});

router.delete('/:areaId', (req, res) => {
  const { areaId } = req.params;
  Area.findOne({ areaId }).then(doc => {
    if (!doc) {
      res.status(404).json({ message: 'Area not found.' });
    } else {
      doc
        .clearLooseEnds()
        .then(doc.remove())
        .then(() => {
          res.sendStatus(204);
        })
        .catch(err => {
          req.log('error', `Failed to remove area | error=${err.toString()}`);
          res.status(500).json(err);
        });
    }
  });
});

router.post('/:areaId/set-nodes', (req, res) => {
  const { areaId } = req.params;
  const { nodes } = req.body;
  if (typeof nodes === 'undefined') {
    return res.status(400).json({ message: 'Nodes are required in the POST body' });
  }
  Area.findOne({ areaId })
    .then(doc => {
      if (!doc) {
        res.status(404).json({ message: 'Area not found.' });
      } else {
        doc.setNodes(nodes);
        return doc.save();
      }
    })
    .then(doc => {
      res.status(200).json(doc);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post('/:areaId/heating/:enabled', (req, res) => {
  const { areaId, enabled } = req.params;
  const validProps = ['on', 'off'];
  if (!validProps.includes(enabled)) {
    return res.status(400).json({ message: 'Heating must be "on" or "off"' });
  }
  Area.findOne({ areaId })
    .then(doc => {
      if (!doc) {
        res.status(404).json({ message: 'Area not found.' });
      } else {
        doc.setHeatingEnabled(enabled === 'on');
        return doc.save();
      }
    })
    .then(doc => {
      res.status(200).json(doc);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = app => {
  app.use('/api/areas', router);
};
