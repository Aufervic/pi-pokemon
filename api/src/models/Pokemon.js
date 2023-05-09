const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    health: {// vida, health, Hit Points
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    attack: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    defense: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    speed: {
      type: DataTypes.INTEGER,
    },
    height: {// 7 pero quiere decir 0.7m
      type: DataTypes.INTEGER,
    },
    weight: {// 69 pero quiere decir 6.9kg
      type: DataTypes.INTEGER,
    },
    
  },{
    timestamps: false
  });
};
