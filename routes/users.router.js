import express from 'express';
import userController from '../controllers/user.controller.js';

const router = express.Router();

/* GET users listing. */
router.get('/get', userController.getUsers);

/* POST users listing. */
router.post('/create', userController.createUsers);

/* PUT users listing. */
router.put('/ipdate/:id', userController.updateUsers);

/* DELETE users listing. */
router.delete('/delete/:id', userController.createUsers);

export default router;
