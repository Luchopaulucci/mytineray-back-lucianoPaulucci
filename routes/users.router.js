import express from 'express';
import userController from '../controllers/user.controller.js';

const router = express.Router();

/* GET user listing. */
router.get('/get', userController.getUser);

/* GETBYID user listing. */
router.get('/get/:id', userController.getUserById);

/* POST user listing. */
router.post('/create', userController.createUser);

/* PUT user listing. */
router.put('/ipdate/:id', userController.updateUser);

/* DELETE user listing. */
router.delete('/delete/:id', userController.createUser);

export default router;
