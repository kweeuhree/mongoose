const Fruit = require('../models/model');


//fetch All Fruits
const fetchAllFruits = async (req, res) => {
    const fruits = await Fruit.find();
    res.status(200).send({ fruits: fruits });
};

//get fruit
const getFruit = async (req, res) => {
    //use req.fruitId
    const fruit = await Fruit.findById(req.fruitId);
    res.status(200).json({ fruit: fruit });
};

//update fruit
    //use req.fruitId
    const updateFruit = async (req, res) => {
        const { name, countryOfOrigin, scientificName } = req.body;
        console.log(req.body, ' req.body');

        const fruit = await Fruit.findByIdAndUpdate(req.fruitId, {
            name: name, 
            countryOfOrigin: countryOfOrigin,
            scientificName: scientificName
        }, { new: true });

        console.log(fruit, ' fruit after update');

        res.status(200).json({ updatedFruit: fruit });
    };
    

//create fruit
const createFruit = async (req, res) => {
    console.log('Body', req.body);
    const { name, countryOfOrigin, scientificName } = req.body; // destructure body object
    const newFruit = await Fruit.create({
        name: name,
        countryOfOrigin: countryOfOrigin,
        scientificName: scientificName
    });

    res.status(200).json({ newFruit: newFruit });
};

//delete fruit
    //use req.fruitId
    const deleteFruit = async (req, res) => {
        try {
            await Fruit.findByIdAndDelete(req.fruitId);
            res.status(200).json({ msg: 'Fruit deleted' });
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while deleting the fruit' });
        }
    };
module.exports = {
    fetchAllFruits,
    getFruit,
    updateFruit,
    createFruit,
    deleteFruit
};