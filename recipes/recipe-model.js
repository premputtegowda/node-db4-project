const db = require('./dbConfig.js');


module.exports = {
    getRecipes,
    getShoppingListById,
    getInstructions,
}

function getRecipes(){
    return db('recipe')
}


function getShoppingListById(recipe_id){
    return db('ingredient as i').join('recipe_ingredient as ri','i.id','ri.ingredient_id').where('ri.recipe_id',recipe_id).select('i.*','ri.ingredient_qty','ri.ingredient_qty_units')
}

function getInstructions(recipe_id) {
    return db('recipe as r').join('steps as s', 'r.id','s.recipe_id').where('s.recipe_id',recipe_id).select('s.id','s.description','s.step_number').orderBy('s.step_number')
}
