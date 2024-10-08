import User from "../../models/User.js"

export const accountExistSigup = async (req, res, next) => {
    const user = await User.findOne({email: req.body.email});

    if(user) {
        return res.status(400).json({
            succes: false,
            message: 'User is already exist'
        })
    }

    return next()
}