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
    diasT: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "0",
      comment: null,
      primaryKey: false,
      field: "diasT",
      autoIncrement: false
    },
    horasextras: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "0",
      comment: null,
      primaryKey: false,
      field: "horasextras",
      autoIncrement: false
    },
    vhora: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: "0",
      comment: null,
      primaryKey: false,
      field: "vhora",
      autoIncrement: false
    },
    bono: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: "0",
      comment: null,
      primaryKey: false,
      field: "bono",
      autoIncrement: false
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
    iddescuento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "iddescuento",
      autoIncrement: false,
      references: {
        key: "id",
        model: "descuento_model"
      }
    },
    iddevengado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "iddevengado",
      autoIncrement: false,
      references: {
        key: "id",
        model: "devengado_model"
      }
    }
  };
  const options = {
    tableName: "sueldo",
    comment: "",
    indexes: [],
    timestamps: false, 
    underscored: true, 
    freezeTableName: true, 
    schema: 'public'
  };
  const SueldoModel = sequelize.define("sueldo_model", attributes, options);

  SueldoModel.associate = function (models) { 
    SueldoModel.belongsTo(models.devengado_model, { 
      foreignKey: 'iddevengado' }); 

    SueldoModel.belongsTo(models.descuento_model, { 
      foreignKey: 'iddescuento' }); 
    
      SueldoModel.belongsTo(models.empleado_model, { 
      foreignKey: 'idempleado' }); 
    };
  return SueldoModel;
};