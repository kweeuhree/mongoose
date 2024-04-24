const express = require('express');
const router = express.Router();

const Fruit = require('../models/model');
const fruitsController = require('../controllers/fruitController');

//router parameters
router.param('id', async (req, res, next, id) => {
    const fruit = await Fruit.findById(id);
    if (fruit) {
        req.fruitId = id;
        next();
    } else {
        res.status(404).send("Fruit not found");
    }
});

//get all fruits
router.get('/', fruitsController.fetchAllFruits);

//get a specific fruit
router.get('/:id', fruitsController.getFruit);

//update a fruit
router.put('/:id', fruitsController.updateFruit);

//create a fruit
router.post('/', fruitsController.createFruit);

//delete a fruit
router.delete('/:id', fruitsController.deleteFruit);

module.exports = router;