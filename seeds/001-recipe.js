
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {id: 1, recipe_name: 'Tandoor Chicken'},
        {id: 2, recipe_name: 'Chicken Tikka Masala'},
        {id: 3, recipe_name: 'Chicken Biriyani'}
      ]);
    });
};
