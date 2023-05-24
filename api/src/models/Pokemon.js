const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlpha: true,
        len: [1, 11], 
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true,
      }
    },
    health: {// vida, health, Hit Points
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        max: 255,
        min: 1
      }
    },
    attack: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        max: 181,
        min: 1
      }
    },
    defense: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        max: 230,
        min: 1
      }
    },
    speed: {
      type: DataTypes.INTEGER,
      validate: {
        max: 200,
        min: 0
      }
    },
    height: {// 7 pero quiere decir 0.7m
      type: DataTypes.INTEGER,
      validate: {
        max: 145,
        min: 0
      }
    },
    weight: {// 69 pero quiere decir 6.9kg
      type: DataTypes.INTEGER,
      validate: {
        max: 9999,
        min: 0
      }
    },
    createdInDB: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    }
  },{
    timestamps: false
  });
};
