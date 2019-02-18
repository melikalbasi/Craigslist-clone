const db = require("../models");

module.exports = {

  // Find all items
  findAll: function(req, res) {
    db.Item.findAll({})
    .then(allData => {
      res.json(allData) 
    }).catch(err => res.status(422).json(err));
  },

  // Find one item
  findOne: function(req, res) {
    db.Item.findAll({
        where: {id: req.params.itemid}
    }).then(allData => {
      res.json(allData) 
    }).catch(err => res.status(422).json(err));
  }

};