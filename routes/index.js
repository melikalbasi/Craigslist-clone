const path = require("path");
const router = require("express").Router();
const propertyController = require("../controllers/propertyController");

router.route("/api/properties/:propertyid")
  .get(propertyController.findOne)

// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../public/index.html"));
// });

module.exports = router;
