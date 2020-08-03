const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

var session = require("express-session");
var passport = require("./config/passport");
var compression = require('compression')

var db = require("./models")

// Define middleware here
app.use(express.urlencoded({ extended: true }));


app.use(compression({
  filter: shouldCompress
}))

function shouldCompress(req, res) {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false
  }

  // fallback to standard filter function
  return compression.filter(req, res)
}

app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(session({
  secret: "keyboard cat",
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());


// Add routes, both API and view
require("./routes/api-routes.js")(app);


// Start the API server
db.sequelize.sync().then(function () {
  app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});
