const path = require("path");
const router = require("express").Router();
const itemController = require("../controllers/itemController");

router.route("/api/items")
  .get(itemController.findAll)

router.route("/api/items/:itemid")
  .get(itemController.findOne)

// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../public/index.html"));
// });

module.exports = router;
