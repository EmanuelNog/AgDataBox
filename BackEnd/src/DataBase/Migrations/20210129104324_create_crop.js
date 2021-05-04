
exports.up = function(knex) {
    return knex.schema.createTable('crop', function(table){
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('start_date').notNullable();
        table.string('finish_date').notNullable();
        table.string('culture_id').notNullable();
        table.foreign('culture_id').references('id').inTable('culture')
    });
};

exports.down = function(knex) {
   return knex.schema.dropTable('crop');
};
