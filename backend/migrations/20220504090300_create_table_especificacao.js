
exports.up = function(knex, Promise) {
    return knex.schema.createTable('especificacao', table=>{
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('description', 1000).notNull()
        table.string('imageUrl', 1000)
        table.binary('content').notNull()
        table.integer('userId').references('id')
            .inTable('users').notNull()
        table.integer('produtoId').references('id')
            .inTable('produto').notNull()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('especificacao')
    
};
