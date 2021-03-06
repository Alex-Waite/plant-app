const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

var session = require("express-session");
var passport = require("./config/passport");
var compression = require('compression')
var path = require("path")

var db = require("./models")

// Define middleware here

app.use(function(req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");

  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  next();

});

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

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
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
