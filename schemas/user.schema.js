import Joi from "joi";
import JoiPwd from 'joi-password-complexity'

const passwordOptions = {
    min: 4,
    max: 26,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 1,
    requirementCount : 4,
}

export const createUserSchema = Joi.object({
    name :Joi.string()
        .required()
        .max(45),
    email : Joi.string()
        .required()
        .max(45)
        .email({
            minDomainSegments: 2
        }),
    password : JoiPwd(passwordOptions)
        .required(),
    photo: Joi.string()
        .required()
        .uri(),
    role: Joi.string()
        .required()
        .max(10),
})