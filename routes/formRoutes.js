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


const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/submit', (req, res) => {
  res.send('API is working. Use POST request to submit form.');
});

router.post('/submit', (req, res) => {
  const { name, email } = req.body;

  const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';

  db.query(sql, [name, email], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: 'Database Error',
      });
    }

    res.json({
      message: 'Form Submitted Successfully',
    });
  });
});

module.exports = router;