module.exports = function(sequelize, DataTypes) {
  // Id, name, description, price, image, location, sellerid (userid), buyerid (userid), reservetime
  var Item = sequelize.define("Item", {
    name: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 100]
      }
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 1000]
      }
    },
    image: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 1000]
      }
    },
    price: {
      type: DataTypes.INTEGER,
      validate: {
        len: [1, 1000]
      }
    },
    location: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 1000]
      }
    },
    sellerid: {
      type: DataTypes.INTEGER,
      validate: {
        len: [1, 1000]
      }
    },
    buyerid: {
      type: DataTypes.INTEGER,
      validate: {
        len: [1, 1000]
      }
    },
    reservetime: {
      type: DataTypes.INTEGER,
      validate: {
        len: [1, 1000]
      }
    },
  });
    
  return Item; 
};
  