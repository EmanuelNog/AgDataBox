
exports.up = function(knex) {
    return knex.schema.createTable('vehicles', function(table){
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('licensePlate').notNullable();
    });
};

exports.down = function(knex) {
  knex.schema.dropTable('vehicles');
};
