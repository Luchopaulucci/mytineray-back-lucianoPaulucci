import User from "../models/User.js";

export const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.query.userId);

    const role = user.role;

    if (role == "Admin") {
      return next();
    }

    return res.status(401).json({
      succes: false,
      message: "You dont have acces",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      succes: false,
      message: "Delete is only for Admin user",
    });
  }
};
