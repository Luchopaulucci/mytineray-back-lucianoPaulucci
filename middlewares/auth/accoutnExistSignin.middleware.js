import User from "../../models/User.js";

export const accountExistSignin = async (req, res, next) => {
    const user = await User.findOne({email: req.body.email});

    if(user) {
        req.user = {
            id: user. _id,
            name: user.name,
            email: user.email,
            photo: user.photo,
            password: user.password,
            online: user.online,
            verified: user.verified
        }

        return next()
    }

    return res.status(400).json({
        succes: false,
        message: 'User do not exist'
    })
}