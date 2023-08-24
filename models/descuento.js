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
    arl: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: "0",
      comment: null,
      primaryKey: false,
      field: "arl",
      autoIncrement: false
    },
    salud: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: "0",
      comment: null,
      primaryKey: false,
      field: "salud",
      autoIncrement: false
    },
    pension: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: "0",
      comment: null,
      primaryKey: false,
      field: "pension",
      autoIncrement: false
    },
    parafiscal: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: "0",
      comment: null,
      primaryKey: false,
      field: "parafiscal",
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
    tableName: "descuento",
    comment: "",
    indexes: [],
    timestamps: false, 
    underscored: true, 
    freezeTableName: true, 
    schema: 'public'
  };
  const DescuentoModel = sequelize.define("descuento_model", attributes, options);

  DescuentoModel.associate = function(models){
    DescuentoModel.hasMany(models.sueldo_model, {
      foreignKey: 'iddescuento'
    });
  }

  return DescuentoModel;
};