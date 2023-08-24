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
    alimentacion: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: "0",
      comment: null,
      primaryKey: false,
      field: "alimentacion",
      autoIncrement: false
    },
    vivienda: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: "0",
      comment: null,
      primaryKey: false,
      field: "vivienda",
      autoIncrement: false
    },
    transporte: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: "0",
      comment: null,
      primaryKey: false,
      field: "transporte",
      autoIncrement: false
    },
    extra: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: "0",
      comment: null,
      primaryKey: false,
      field: "extra",
      autoIncrement: false
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "fecha",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "devengado",
    comment: "",
    indexes: [],
    timestamps: false, 
    underscored: true, 
    freezeTableName: true, 
    schema: 'public'
  };
  const DevengadoModel = sequelize.define("devengado_model", attributes, options);
  
  DevengadoModel.associate = function(models){
    DevengadoModel.hasMany(models.sueldo_model, {
      foreignKey: 'iddevengado'
    });
  }
  
  return DevengadoModel;
};