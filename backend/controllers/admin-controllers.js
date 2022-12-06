const HttpError = require("../models/http-error")
const { validationResult, body } = require("express-validator")
const pg  = require('pg');

const pool = false
    ?
    new pg.Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        },
    })
    :
    new pg.Client({
        // connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        },
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        port: process.env.DATABASE_PORT,
        host: process.env.DATABASE_HOST,
        database: process.env.DATABASE
    })
const getOrders = async (request, response) => {
    const client = await pool.connect();

    client.query('SELECT * FROM drink_orders2 ORDER BY date DESC', (error, result) => {
        if (error) {
            console.error(error);
            result.send("Error " + error)
        }
        const results = { 'results': (result) ? result.rows : null };
        res.json(results);
    })
}

exports.getOrders = getOrders