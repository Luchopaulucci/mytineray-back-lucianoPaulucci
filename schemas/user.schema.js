import Joi from "joi";
import JoiPwd from 'joi-password-complexity'

const email = Joi.string()
    .required()
    .email({
        minDomainSegments: 2
    })
const password =  Joi.string()
    .required()
    .min(6)
    .max(35)
    .alphanum();

export const createUserSchema = Joi.object({
    email,
    password,
    name :Joi.string()
        .required()
        .max(45),
    photo: Joi.string()
        .required()
        .uri(),
    country: Joi.string(),
})

export const userSignInschema = Joi.object({
    email,
    password,
})