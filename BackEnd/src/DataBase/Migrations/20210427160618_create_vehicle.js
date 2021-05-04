exports.up = function(knex) {
    return knex.schema.createTable('vehicle', function(table){
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('license_plate').notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('vehicle');
};
