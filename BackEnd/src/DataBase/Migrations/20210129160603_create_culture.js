
exports.up = function(knex) {
    return knex.schema.createTable('Culture', function(table){
        table.increments('ID');
        table.string('Name').notNullable();
    });
};

exports.down = function(knex) {
    knex.schema.dropTable('Culture');
};
