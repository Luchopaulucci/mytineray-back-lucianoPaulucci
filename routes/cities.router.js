import express from 'express';
const router = express.Router();

/* GET cities listing. */
router.get('/', function(req, res) {
  res.json({
    cities: [
      { name: 'Buenos Aires'},
      {name: 'San Francisco'},
    ]
  });
});

export default router;