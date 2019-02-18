module.exports = function(sequelize, DataTypes) {
    var Property = sequelize.define("Property", {
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
      }
    });
  
    // Property.associate = function(models){
    //   Property.belongsToOne(models.Host, {
    //     onDelete: "cascade"
    //   });
    // }
    
    return Property; 
  };
  