
exports.up = function(knex) {
    return knex.schema.createTable('Crop', function(table){
        table.string('ID').primary();
        table.string('Name').notNullable();
        table.string('StartDate').notNullable();
        table.string('FinishDate').notNullable();
        table.string('culture_ID').notNullable();
        table.foreign('culture_ID').references('ID').inTable('Culture')
    });
};

exports.down = function(knex) {
    knex.schema.dropTable('Crop');
};
