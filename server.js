const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const db = require("./models");

// Define middleware here
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("client/build"));

app.use(routes);

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT} -- http://localhost:${PORT}/`);
  });
});