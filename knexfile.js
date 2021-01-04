// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './database/co-make-33.db3'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      }
    },
    migrations: {
      directory: './database/migrations'
    }, 
    seeds: {
      directory: './database/seeds'
    }
  },

  staging: {

  },

  production: {
    client: 'sqlite3',
    connection: {
      database: './database/co-make-33.db3',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: './database/migrations'
    }
  }

};
