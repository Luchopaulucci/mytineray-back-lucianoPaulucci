import express from 'express';
import citiesController from '../controllers/cities.controller.js'

const router = express.Router();

/* GET cities listing. */
router.get('/get', citiesController.getCities);

/* GETBYID cities listing. */
router.get('/:id', citiesController.getCitiesById);

/* POST cities listing. */
router.post('/create', citiesController.createCities);

/* PUT cities listing. */
router.put('/:id', citiesController.updateCities);

/* DELETE cities listing. */
router.delete('/:id', citiesController.deleteCities);

export default router;