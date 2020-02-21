
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, description: 'description 1', step_number: 1, recipe_id: 1},
        {id: 2, description: 'description 2', step_number: 2, recipe_id: 1},
        {id: 3, description: 'description 3', step_number: 3, recipe_id: 1},
        {id: 4, description: 'description 1', step_number: 1, recipe_id: 2},
        {id: 5, description: 'description 2', step_number: 2, recipe_id: 2},
        {id: 6, description: 'description 3', step_number: 3, recipe_id: 2}
      ]);
    });
};
