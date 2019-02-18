const db = require("../models");

module.exports = {
  // Find all paths
  findOne: function(req, res) {
    db.Path.findAll({
        where: {
            id: req.params.propertyid
        }
    })
    .then(allData => {
      res.json(allData) 
    }).catch(err => res.status(422).json(err));
  }

};