'use strict';

const server = require('./server');

const ds = server.dataSources.default;
const lbTables = ['todo'];
ds.automigrate(lbTables, (er) => {
  if (er) throw er;
  console.log(
    'Loopback tables [' + lbTables + '] created in ',
    ds.adapter.name
  );
  ds.disconnect();
});
