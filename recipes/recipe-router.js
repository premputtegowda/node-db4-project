const express = require('express');
const Recipe = require('./recipe-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Recipe.getRecipes()
        .then(recipes => res.status(200).json(recipes))
        .catch(err => res.status(500).json({error: "sorry unable to obtain recipes"}))
})


router.get('/:id/shoppingList', (req, res)=> {
    Recipe.getShoppingListById(req.params.id)
        .then(ingredients => res.status(200).json(ingredients))
        .catch(err => res.status(500).json({error: "sorry unable to obtain shopping list"}))
})

router.get('/:id/instructions',(req, res) => {
    Recipe.getInstructions(req.params.id)
        .then(steps => res.status(200).json(steps))
        .catch(err => res.status(500).json({error: "sorry unable to obtain shopping list"}))
} )



module.exports = router;