const HttpError = require("../models/http-error")
const { validationResult, body } = require("express-validator")
const pg = require('pg');

const config = {
    user: process.env.DATABASE_USER,
    database: process.env.DATABASE,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT
}

const pool = new pg.Pool(config)

const getOrders = async (req, res, next) => {
    pool.connect(function(err, client, done) {
        if (err) {
            console.log(`Can't connect to DB: ${err}`)
        }

        client.query('SELECT * FROM public.drink_orders2 ORDER BY date DESC', (error, result) => {
            if (error) {
                console.error(`ERROR: ${error}`);
                result.send("Error " + error)
            }
            const results = { 'results': (result) ? result.rows : null };
            res.json(results);
        })
    })
}

// const pool = false
//     ?
//     new pg.Client({
//         connectionString: process.env.DATABASE_URL,
//         ssl: {
//             rejectUnauthorized: false
//         },
//     })
//     :
//     new pg.Client({
//         // connectionString: process.env.DATABASE_URL,
//         ssl: {
//             rejectUnauthorized: false
//         },
//         user: process.env.DATABASE_USER,
//         password: process.env.DATABASE_PASSWORD,
//         port: process.env.DATABASE_PORT,
//         host: process.env.DATABASE_HOST,
//         database: process.env.DATABASE
//     })

// const { Pool } = require('pg'); 
// const { post } = require("../routes/admin-routes");

// // const pool = new Pool({
// //     connectionString: process.env.DATABASE_URL,
// //     ssl: {
// //         rejectUnauthorized: false
// //     }
// // })

// const getOrders = async (request, response) => {

//     const pool = new Pool({
//         connectionString: process.env.DATABASE_URL,
//         ssl: {
//             rejectUnauthorized: false
//         }
//     })

//     let client

//     try {
//         client = pool.connect({
//             ssl: {
//                 rejectUnauthorized: false
//             }
//         });

//         console.log(`Connected to pool: ${client}`)

//         client.query('SELECT * FROM drink_orders2 ORDER BY date DESC', (error, result) => {
//             if (error) {
//                 console.error(error);
//                 result.send("Error " + error)
//             }
//             const results = { 'results': (result) ? result.rows : null };
//             res.json(results);
//         })

//     } catch (err) {
//         console.log(`Error in Admin-Controllers: ${err}`)
//     }
// }

exports.getOrders = getOrders