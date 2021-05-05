exports.up = function(knex) {
    return knex.schema.createTable('machine', function(table){
        table.string('id').primary();
        table.string('name').notNullable();
        table.decimal('year').notNullable();

        table.string('user_id').notNullable();
        table.string('operation_machine_id');

        table.foreign('user_id').references('id').inTable('user');
        //table.foreign('operation_machine_id').references('id').inTable('operation');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('machine');
};

