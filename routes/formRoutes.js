// const express = require('express');
// const router = express.Router();
// const db = require('../config/db');

// router.post('/submit', (req, res) => {
//   const { name, email } = req.body;

//   const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';

//   db.query(sql, [name, email], (err, result) => {
//     if (err) {
//       return res.status(500).json({
//         message: 'Database Error',
//       });
//     }

//     res.json({
//       message: 'Form Submitted Successfully',
//     });
//   });
// });

// module.exports = router;


// const express = require('express');
// const router = express.Router();
// const db = require('../config/db');

// router.get('/submit', (req, res) => {
//   res.send('API is working. Use POST request to submit form.');
// });

// router.post('/submit', (req, res) => {
//   const { name, email } = req.body;

//   const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';

//   db.query(sql, [name, email], (err, result) => {
//     if (err) {
//       return res.status(500).json({
//         message: 'Database Error',
//       });
//     }

//     res.json({
//       message: 'Form Submitted Successfully',
//     });
//   });
// });

// module.exports = router;

// const express = require('express');
// const router = express.Router();
// const db = require('../config/db');

// router.get('/submit', (req, res) => {
//   res.send('API is working');
// });

// router.post('/submit', async (req, res) => {
//   try {
//     const { name, email } = req.body;

//     await db.query(
//       'INSERT INTO users(name, email) VALUES(?, ?)',
//       [name, email]
//     );

//     res.json({
//       message: 'Form Submitted Successfully',
//     });

//   } catch (error) {
//     console.log(error);

//     res.status(500).json({
//       message: 'Database Error',
//     });
//   }
// });

// module.exports = router;

// const express = require('express');
// const router = express.Router();
// const db = require('../config/db');

// router.get('/submit', (req, res) => {
//   res.send('API is working');
// });

// router.post('/submit', async (req, res) => {
//   try {
//     const { name, email } = req.body;

//     await db.query(
//       'INSERT INTO users(name, email) VALUES($1, $2)',
//       [name, email]
//     );

//     res.json({
//       message: 'Form Submitted Successfully',
//     });

//   } catch (error) {
//     console.log(error);

//     res.status(500).json({
//       message: 'Database Error',
//       error: error.message
//     });
//   }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const db = require('../config/db');

/*
  GET API TEST
*/
router.get('/submit', (req, res) => {

  res.json({
    success: true,
    message: 'API is working'
  });

});

/*
  POST FORM SUBMIT
*/
router.post('/submit', async (req, res) => {

  try {

    console.log('Request Body:', req.body);

    const { name, email } = req.body;

    /*
      VALIDATION
    */
    if (!name || !email) {

      return res.status(400).json({
        success: false,
        message: 'Name and Email are required'
      });

    }

    /*
      INSERT DATA
    */
    const [result] = await db.query(
      'INSERT INTO users(name, email) VALUES(?, ?)',
      [name, email]
    );

    /*
      SUCCESS RESPONSE
    */
    res.status(200).json({
      success: true,
      message: 'Form Submitted Successfully',
      insertedId: result.insertId
    });

  } catch (error) {

    /*
      FULL ERROR LOG
    */
    console.log('========== DATABASE ERROR ==========');
    console.log(error);
    console.log('====================================');

    /*
      ERROR RESPONSE
    */
    res.status(500).json({
      success: false,
      message: 'Database Error',

      errorMessage: error.message,
      errorCode: error.code,
      errorNumber: error.errno,
      sqlMessage: error.sqlMessage,
      sqlState: error.sqlState,
      stack: error.stack
    });

  }

});

module.exports = router;