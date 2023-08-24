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
    },
    usuario: {
      type: DataTypes.CHAR(200),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "usuario",
      autoIncrement: false
    },
    clave: {
      type: DataTypes.CHAR(20),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "clave",
      autoIncrement: false
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: null,
      primaryKey: false,
      field: "estado",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "cuenta",
    comment: "",
    indexes: [],
    timestamps: false, 
    underscored: true, 
    freezeTableName: true, 
    schema: 'public'
  };
  const CuentaModel = sequelize.define("cuenta_model", attributes, options);
  CuentaModel.associate = function(models){
    CuentaModel.hasOne(models.cuentaEmpleado_model, {
      foreignKey: 'idcuenta'
    });
  };
  return CuentaModel;
};