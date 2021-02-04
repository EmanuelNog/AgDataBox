
exports.up = function(knex) {
    return knex.schema.table('Crop', function(table){
        table.string('user_ID').notNullable().default('0');
        table.foreign('user_ID').references('ID').inTable('User')
    })
};

exports.down = function(knex) {
  
};
