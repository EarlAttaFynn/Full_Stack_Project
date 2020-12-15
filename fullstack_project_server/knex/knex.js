const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'Earl',
        password: 'waffle',
        database: 'Project'
    }
});

module.exports = knex;