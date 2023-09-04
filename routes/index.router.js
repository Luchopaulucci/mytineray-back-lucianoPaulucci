import express from 'express';
const router = express.Router();

import usersRouter from './users.router.js';
import citiesRouter from './cities.router.js';
import itineraryRouter from './itinerary.router.js'

/* GET home page. */
router.get('/', function(req, res) {
  res.send('HELLO WORLD');
});

router.use('/users', usersRouter);

router.use('/cities', citiesRouter);

router.use('/itinerary', itineraryRouter);

export default router;
