// Update with your config settings.

module.exports = {

  debug:true,

  development: {
    
    useNullAsDefault:true,

    client: 'sqlite3',
    connection: {
      filename: './src/DataBase/db.sqlite'
    },
    migrations:{
      directory:'./src/DataBase/Migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
