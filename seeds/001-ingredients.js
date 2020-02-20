
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredient').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient').insert([
        {id: 1, ingredient_name: 'ingredient 1'},
        {id: 2, ingredient_name: 'ingredient 2'},
        {id: 3, ingredient_name: 'ingredient 3'},
        {id: 4, ingredient_name: 'ingredient 4'}
      ]);
    });
};
