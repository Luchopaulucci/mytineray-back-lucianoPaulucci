import express from 'express';
import itineraryController from '../controllers/itinerary.controller.js'

const router = express.Router();

/* GET itinerary listing. */
router.get('/get', itineraryController.getItinerary);

/* GETBYID itinerary listing. */
router.get('/:id', itineraryController.getItineraryById);

/* POST itinerary listing. */
router.post('/create', itineraryController.createItinerary);

/* PUT itinerary listing. */
router.put('/:id', itineraryController.updateItinerary);

/* DELETE itinerary listing. */
router.delete('/:id', itineraryController.deleteItinerary);

export default router;