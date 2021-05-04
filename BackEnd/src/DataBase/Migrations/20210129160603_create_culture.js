
exports.up = function(knex) {
    return knex.schema.createTable('culture', function(table){
        table.increments('id');
        table.string('name').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('culture');
};
