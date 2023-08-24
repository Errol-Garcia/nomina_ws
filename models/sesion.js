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
      type: DataTypes.CHAR(30),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "nombre",
      autoIncrement: false
    },
    usuario: {
      type: DataTypes.CHAR(30),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "usuario",
      autoIncrement: false
    },
    password: {
      type: DataTypes.CHAR(30),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "password",
      autoIncrement: false
    },
    cedula: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "cedula",
      autoIncrement: false
    },
    idrol: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "idrol",
      autoIncrement: false,
      references: {
        key: "id",
        model: "rol_model"
      }
    }
  };
  const options = {
    tableName: "sesion",
    comment: "",
    indexes: [],
    timestamps: false, 
    underscored: true, 
    freezeTableName: true, 
    schema: 'public'
  };
  const SesionModel = sequelize.define("sesion_model", attributes, options);

  SesionModel.associate = function(models){
    SesionModel.belongsTo(models.rol_model, { 
      foreignKey: 'idrol' }); 
  };
  return SesionModel;
};