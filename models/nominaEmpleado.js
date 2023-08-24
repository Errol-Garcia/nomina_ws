const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: "nextval(\"nominaEmpleado_id_seq\"::regclass)",
      comment: null,
      primaryKey: false,
      field: "id",
      autoIncrement: false
    },
    id_empleado: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id_empleado",
      autoIncrement: false,
      references: {
        key: "id",
        model: "empleado_model"
      }
    },
    sueldoNeto: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "sueldoNeto",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "nominaEmpleado",
    comment: "",
    indexes: [],
    timestamps: false, 
    underscored: true, 
    freezeTableName: true, 
    schema: 'public'
  };
  const NominaEmpleadoModel = sequelize.define("nominaEmpleado_model", attributes, options);
  
  NominaEmpleadoModel.associate = function(models){
    NominaEmpleadoModel.belongsTo(models.empleado_model, { 
      foreignKey: 'id_empleado' }); 
  };
  return NominaEmpleadoModel;
};