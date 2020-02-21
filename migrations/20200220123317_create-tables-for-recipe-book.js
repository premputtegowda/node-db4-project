
exports.up = function(knex) {
    return knex.schema.createTable("recipe",tbl => {
        tbl.increments();
        tbl.string('recipe_name',255).notNullable();
    })
    .createTable('ingredient', tbl => {
        tbl.increments();
        tbl.string('ingredient_name', 255)
            .notNullable()
    })
    .createTable("steps", tbl => {
        tbl.increments();
        tbl.string("description", 255).notNullable();
        tbl.integer('step_number',255).notNullable;
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipe')
    })
    .createTable("recipe_ingredient", tbl=> {
        tbl.primary(['recipe_id','ingredient_id'])
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipe')
        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredient')
        tbl.float('ingredient_qty')
            .notNullable()
        tbl.string('ingredient_qty_units',255)
            .notNullable()
    })
    
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('recipe')
    .dropTableIfExists('ingredient')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipe_ingredient')
  
};
