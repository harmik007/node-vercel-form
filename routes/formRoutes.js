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

const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/submit', (req, res) => {
  res.send('API is working');
});

router.post('/submit', async (req, res) => {
  try {
    const { name, email } = req.body;

    await db.query(
      'INSERT INTO users(name, email) VALUES($1, $2)',
      [name, email]
    );

    res.json({
      message: 'Form Submitted Successfully',
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: 'Database Error',
    });
  }
});

module.exports = router;