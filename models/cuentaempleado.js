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
      primaryKey: false,
      field: "id",
      autoIncrement: true
    },
    idempleado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "idempleado",
      autoIncrement: false,
      references: {
        key: "id",
        model: "empleado_model"
      }
    },
    idcuenta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "idcuenta",
      autoIncrement: false,
      references: {
        key: "id",
        model: "cuenta_model"
      }
    }
  };
  const options = {
    tableName: "cuentaempleado",
    comment: "",
    indexes: [],
    timestamps: false, 
    underscored: true, 
    freezeTableName: true, 
    schema: 'public'
  };
  const CuentaempleadoModel = sequelize.define("cuentaempleado_model", attributes, options);

  CuentaempleadoModel.associate = function(models){
    CuentaempleadoModel.belongsTo(models.cuenta_model, { 
      foreignKey: 'idcuenta' }); 
    CuentaempleadoModel.belongsTo(models.empleado_model, { 
      foreignKey: 'idempleado' }); 
  };
  return CuentaempleadoModel;
};