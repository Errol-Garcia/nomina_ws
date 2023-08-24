const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id",
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.CHAR(50),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "nombre",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "cargo",
    comment: "",
    indexes: [],
    timestamps: false, 
    underscored: true, 
    freezeTableName: true, 
    schema: 'public'
  };
  const CargoModel = sequelize.define("cargo_model", attributes, options);
  CargoModel.associate = function(models){
    CargoModel.hasMany(models.empleado_model, {
      foreignKey: 'idcargo'
    });
  }
  return CargoModel;
};