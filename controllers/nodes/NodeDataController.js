const router = require('express').Router();
const mongoose = require('mongoose');

const Node = mongoose.model('Node');
const Area = mongoose.model('Area');

// TODO: Add the Node data!
router.get('/areas', (req, res) => {
  res.status(200).json([
    {
      area: 'Living Room',
      nodes: [
        {
          id: '93ee18b9-ef6f-4e69-84ed-21383980b476',
          type: 'Heater',
          name: 'Radiator (Balcony)',
          on: true,
          online: true
        },
        {
          id: '3cbde55b-3e4e-492c-aae7-a963e94907b4',
          type: 'Heater',
          name: 'Radiator (Table)',
          on: true,
          online: false
        },
        {
          id: 'c2435ca5-3212-479a-bce6-d0abe3b5475d',
          type: 'Monitor',
          name: 'Living Room Monitor',
          on: true,
          online: true
        }
      ]
    },
    {
      area: 'Hallway',
      nodes: [
        {
          id: '2222e523-81f9-4c39-ba8e-e8ebd85df0f2',
          type: 'Heater',
          name: 'Hallway Radiator',
          on: true,
          online: true
        },
        {
          id: 'dfabcd74-6c38-4850-b3a8-160e4b55b51e',
          type: 'Monitor',
          name: 'Hallway Monitor',
          on: true,
          online: false
        }
      ]
    },
    {
      area: "Fayez's Room",
      nodes: [
        {
          id: '49462a80-cbf8-45f1-abb9-7226e6533cde',
          type: 'Heater',
          name: "Fayez's Bedroom Radiator",
          on: true,
          online: true
        },
        {
          id: '437c804c-e871-416d-ac0c-663451fb8588',
          type: 'Monitor',
          name: "Fayez's Room Monitor",
          on: true,
          online: true
        }
      ]
    },
    {
      area: "Tom's Room",
      nodes: [
        {
          id: 'f346696f-9bae-4fce-b6d2-4ed22157e90d',
          type: 'Heater',
          name: "Tom's Radiator",
          on: true,
          online: true
        },
        {
          id: 'a2e2a4f0-8279-4419-9e75-d3292c04bf82',
          type: 'Monitor',
          name: "Tom's Room Monitor",
          on: true,
          online: true
        }
      ]
    },
    {
      area: 'Main Bathroom',
      nodes: [
        {
          id: '0c5b93df-ddab-4f61-bbd9-8d0de4ecd4c9',
          type: 'heater',
          name: 'Towel Radiator',
          on: true,
          online: true
        }
      ]
    },
    {
      area: 'Ensuite',
      nodes: [
        {
          id: 'c0688d0d-d2bf-4ef9-ae60-6811376b2cdc',
          type: 'heater',
          name: 'Towel Radiator',
          on: true,
          online: true
        }
      ]
    }
  ]);
});

router.get('/uninitialized', async (req, res) => {
  const nodes = await Node.find({ initialized: false });
  res.status(200).json(nodes);
});

router.post('/:nodeId/setup', async (req, res) => {
  const { nodeId } = req.params;
  const { name, areaId } = req.body;
  const node = await Node.findOne({ nodeId });
  const area = await Area.findOne({ areaId });
  if (!node) {
    return res.status(404).json({ message: 'Node not found' });
  }
  if (!area) {
    return res.status(404).json({ message: 'Area not found' });
  }
  node.initialize(name);
  area.addNode(nodeId, name);
  Promise.all([node.save(), area.save()])
    .then(docs => {
      const [updatedNode, updatedArea] = docs;
      res.status(200).json({ node: updatedNode, area: updatedArea });
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to save documents.', err });
    });
});

router.get('/', (req, res) => {
  Node.find({})
    .then(documents => res.status(200).json(documents))
    .catch(err => res.status(500).json(err));
});

module.exports = app => {
  app.use('/api/nodes', router);
};
