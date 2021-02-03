exports.up = function(knex) {
    return knex.schema.createTable('User', function(table){
        table.string('ID').primary();
        table.string('Name').notNullable();
        table.string('Password').notNullable();
    });
};

exports.down = function(knex) {
    knex.schema.dropTable('User');
};