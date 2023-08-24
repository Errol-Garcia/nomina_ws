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
    cedula: {
      type: DataTypes.CHAR(15),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "cedula",
      autoIncrement: false
    },
    nombres: {
      type: DataTypes.CHAR(45),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "nombres",
      autoIncrement: false
    },
    apellidos: {
      type: DataTypes.CHAR(45),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "apellidos",
      autoIncrement: false
    },
    salario: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "salario",
      autoIncrement: false
    },
    telefono: {
      type: DataTypes.CHAR(15),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "telefono",
      autoIncrement: false
    },
    direccion: {
      type: DataTypes.CHAR(200),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "direccion",
      autoIncrement: false
    },
    email: {
      type: DataTypes.CHAR(100),
      allowNull: true,
      defaultValue: "NULL",
      comment: null,
      primaryKey: false,
      field: "email",
      autoIncrement: false
    },
    iddepartamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "iddepartamento",
      autoIncrement: false,
      references: {
        key: "id",
        model: "departamento_model"
      }
    },
    idcargo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "idcargo",
      autoIncrement: false,
      references: {
        key: "id",
        model: "cargo_model"
      }
    }
  };
  const options = {
    tableName: "empleado",
    comment: "",
    indexes: [],
    timestamps: false, 
    underscored: true, 
    freezeTableName: true, 
    schema: 'public'
  };
  const EmpleadoModel = sequelize.define("empleado_model", attributes, options);
  EmpleadoModel.associate = function(models){
    EmpleadoModel.hasMany(models.sueldo_model, {
      foreignKey: 'idempleado'
    });
    EmpleadoModel.hasOne(models.cuentaempleado_model, {
      foreignKey: 'idempleado'
    });
    EmpleadoModel.hasOne(models.nominaEmpleado_model, {
      foreignKey: 'id_empleado'
    });

    EmpleadoModel.belongsTo(models.cargo_model, { 
      foreignKey: 'idcargo' }); 

    EmpleadoModel.belongsTo(models.departamento_model, { 
      foreignKey: 'iddepartamento' }); 
  };


  return EmpleadoModel;
};