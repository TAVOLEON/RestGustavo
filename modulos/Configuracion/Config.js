//aqui va la configuracion para conectarse  a la base de datos...

const promise = require('bluebird');
const options = {
    promiseLib: promise
};

const pgp = require('pg-promise')(options);

const cn = 'postgres://postgres:el kapu es feo@localhost:5432/USER_UC'
const db = pgp(cn);

module.exports =db;