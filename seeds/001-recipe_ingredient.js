
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredient').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredient').insert([
        {recipe_id: 1, ingredient_id: 1, ingredient_qty: 2 , ingredient_qty_units: 'grams'},
        {recipe_id: 1, ingredient_id: 2, ingredient_qty: 3, ingredient_qty_units:'cup' },
        {recipe_id: 2, ingredient_id: 2, ingredient_qty: 1 , ingredient_qty_units: 'cup' },
        {recipe_id: 2, ingredient_id: 3, ingredient_qty: 1 , ingredient_qty_units:'milligrams'}
      ]);
    });
};
