// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

// connection.connect((err) => {
//   if (err) {
//     console.log('Database connection failed');
//     return;
//   }

//   console.log('Database Connected');
// });

// module.exports = connection;

const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

module.exports = pool;