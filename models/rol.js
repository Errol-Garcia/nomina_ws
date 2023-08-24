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
    descripcion: {
      type: DataTypes.CHAR(100),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "descripcion",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "rol",
    comment: "",
    indexes: [],
    timestamps: false, 
    underscored: true, 
    freezeTableName: true, 
    schema: 'public'
  };
  const RolModel = sequelize.define("rol_model", attributes, options);

  RolModel.associate = function(models){
    RolModel.hasMany(models.sesion_model, {
      foreignKey: 'idrol'
    });
  }
  return RolModel;
};