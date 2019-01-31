'use strict';

console.log(JSON.stringify(process.env));

module.exports = {
  memory: {
    name: 'memory',
    localStorage: '',
    file: '',
    connector: 'memory',
  },
  default: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    name: 'default',
    user: process.env.DB_USER,
    connector: 'mysql',
  },
};
