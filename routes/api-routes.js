var db = require("../models");
var passport = require("../config/passport");
var sequelize = require("sequelize");

module.exports = function (app) {
    // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id,
    });
  });

  app.post("/api/signup", function (req, res) {
    db.User.create({
        user: req.body.username,
        email: req.body.email,
        password: req.body.password
      })
      .then(function () {

        res.redirect(307, "/api/login");

      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        user: req.user.user,
        id: req.user.id
      });
    }
  });

}