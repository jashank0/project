const express = require("express");
const User = require("../models/User");
const router = express.Router();

// ROUTE1: Create a User using: POST "/api/auth/createUser". No login required
router.post(
  "/register",
  async (req, res) => {
    let success = false;
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ success, error: "User already exists with this email" });
      }
      user = await User.create({
        email: req.body.email,
        fname:req.body.fname,
        lname:req.body.lname,
        mobileNumber: req.body.mobileNumber,
        password: req.body.password,
      });
           success = true;
      res.json({ success, user });
    } catch (error) {
      console.log(error);
      res.status(500).send("Some error occured");
    }
  }
);

//ROUTE2: Authenticate a user using :POST "api/auth/login".No login required
router.post(
  "/login",
  async (req, res) => {
    let success = false;
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }
      console.log(user.password);
      console.log(password);
      if (user.password!=password) {
        return res.status(400).json({
          success,
          error: "Please try to login with correct credentials",
        });
      }
      success = true;
      res.json({ success, user });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

module.exports = router;