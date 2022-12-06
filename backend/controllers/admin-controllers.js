const HttpError = require("../models/http-error")
const { validationResult, body } = require("express-validator")
const { Pool } = require('pg');

const pool = new Pool({connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });

const getOrders = async (request, response) => {
    const client = await pool.connect();

    client.query('SELECT * FROM drink_orders2 ORDER BY date DESC', (error, result) => {
        if (error) {
            console.error(error);
            result.send("Error " + error)
        }
        const results = { 'results': (result) ? result.rows : null};
        res.json(results);
    })
}

exports.getOrders = getOrders