import express from 'express';
const router = express.Router();

import usersRouter from './users.router.js';
import citiesRouter from './cities.router.js';

/* GET home page. */
router.get('/', function(req, res) {
  res.send('HELLO WORLD');
});

router.use('/users', usersRouter);

router.use('/cities', citiesRouter);

export default router;
