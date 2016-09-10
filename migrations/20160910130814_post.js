
exports.up = function(knex, Promise) {
  return knex.schema.createTable('post', function(table){
    table.increments()
    table.text('name')
    table.text('post body')
    table.integer('authorFK')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('post')
};
