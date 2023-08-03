const { Pool } = require("pg");
const { password } = require("./password");

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: password,
    port: 5432,
})

module.exports = pool;