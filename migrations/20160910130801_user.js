
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', function(table){
    table.increments()
    table.text('username')
    table.text('password')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user')
};
