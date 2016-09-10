
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comment', function(table){
    table.increments()
    table.text('user')
    table.text('post')
    table.text('comment')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comment')
};
