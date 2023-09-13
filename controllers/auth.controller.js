import bcryptjs from "bcryptjs";
import crypto from "crypto";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

const controller = {
  signup: async (req, res, next) => {
    try {
      req.body.verified_code = crypto.randomBytes(10).toString("hex");
      req.body.password = bcryptjs.hashSync(req.body.password, 10);

      const user = await User.create(req.body);

      return res.status(201).json({
        succes: true,
        message: "User registered",
      });
    } catch (error) {
      res.status(500).json({
        succes: false,
        message: "User is not registered",
      });
    }
  },

  signin: async (req, res, next) => {
    try {
      let user = await User.findOneAndUpdate(
        { email: req.user.email },
        { online: true },
        { new: true }
      );

      const token = jwt.sign(
        {
          id: user._id,
          email: user.email,
          name: user.name,
          photo: user.photo,
        },
        process.env.SECRET_TOKEN,
        {
          expiresIn: "5h",
        }
      );

      user.password = null;

      return res.status(200).json({
        succes: true,
        message: "User is logged succesfully",
        response: {
          token,
          user: {
            name: user.name,
            email: user.email,
            photo: user.photo,
          },
        },
      });
    } catch (error) {
      res.status(500).json({
        succes: false,
        message: "User is not autenticated",
      });
    }
  },

  signout: async (req, res, next) => {
    try {
      const user = await User.findOneAndUpdate(
        { email: req.user.email },
        { online: false },
        { new: true }
      );

      return res.status(200).json({
        succes: true,
        message: "User is logged out",
      });
    } catch (error) {
      res.status(500).json({
        succes: false,
        message: "User is not deslogued",
      });
    }
  },

  token: async (req, res, next) => {
    const { user } = req
    try {
      return res.status(200).json({
        user: {
          name: user.name,
          email: user.email,
          photo: user.photo,
        },
      });
    } catch (error) {
      next(error)
    }
  },
};

export default controller;
