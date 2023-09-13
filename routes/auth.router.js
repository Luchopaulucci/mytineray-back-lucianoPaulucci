import express from "express";
import authController from '../controllers/auth.controller.js'
import { accountExistSigup } from "../middlewares/auth/accountExistSignup.middleware.js";
import { accountExistSignin } from "../middlewares/auth/accoutnExistSignin.middleware.js";
import { accountHasBeenVerified } from "../middlewares/auth/accountHasBeenVerified.middleware.js";
import { passwordisOk } from "../middlewares/auth/passwordisOk.middleware.js"
import passport from "../middlewares/passport.js";

const router = express.Router();

router.post('/signup', accountExistSigup, authController.signup)

router.post('/signin', accountExistSignin, accountHasBeenVerified, passwordisOk, authController.signin)

router.post('/signout', passport.authenticate('jwt', {session: false}) ,authController.signout)

router.post('/token', passport.authenticate('jwt',{session: false }), authController.token)

export default router;