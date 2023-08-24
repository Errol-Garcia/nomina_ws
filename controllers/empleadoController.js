const { where } = require('sequelize');
const db = require('../models');
const empleado = require("../models").empleado_model;
const sueldo = require("../models").sueldo_model;
const nominaEmpleado = require("../models").nominaEmpleado_model;

module.exports = {
  /*getEmpleadoByCedula(req, res) {
    const cedula= req.params.idcedula;
    console.log(cedula);

    return empleado
        .findOne({
          attributes: ['nombres','apellidos','telefono','sueldo'],
          where:{cedula}})
        .then((empleado) => {
            console.log(empleado);
            if (!empleado) {
                return res.status(400).send({
                    message: 'empleado Not Found',
                });
            }
            return res.status(200).send(empleado);
        })
        .catch((error) =>
            res.status(500).send({
              message: 'Internal server error',
              error: error.message,}
            ));
},*/
async getEmpleadoByCedula(req, res) {
  const cedula = req.params.idcedula;
  console.log(cedula);
  
  try {
      const foundEmpleado = await empleado.findOne({
          attributes: ['nombres', 'apellidos', 'telefono', 'salario'],
          where: { cedula } // Aquí corregí la estructura del objeto where
      });

      if (!foundEmpleado) {
          return res.status(404).send({
              message: 'Empleado Not Found',
          });
      }

      return res.status(200).send(foundEmpleado);
  } catch (error) {
      console.error(error);
      return res.status(500).send({
          message: 'Internal Server Error',
          error: error.message,
      });
  }
},
    addEmpleado(req, res) {
        return empleado
        .create({
            cedula: req.body.cedula,
            nombres: req.body.nombres,
            apellidos: req.body.apellidos,
            salario: req.body.salario,
            telefono: req.body.telefono,
            direccion: req.body.direccion,
            email: req.body.email,
            iddepartamento: req.body.iddepartamento,
            idcargo: req.body.idcargo,
        })
        .then((empleado) => res.status(200).send(empleado))
        .catch((error) => res.status(400).send(error));
    },
    list(req, res) {
    return empleado
        .findAll({})
        .then((empleado) => res.status(200).send(empleado))
        .catch((error) => {
        res.status(400).send(error);
        });
    },
    deleteEmpleado(req, res) {
        return sueldo
          .findOne({
            where: {idempleado: req.params.idempleado}
          })
          .destroy()
          .then(() => {
            return nominaEmpleado
                    .findOne({
                        where: {idempleado: req.params.idempleado}
                    })
                    .destroy()
          })
          .then(() => {
            return empleado
                    .findByPk(req.params.idempleado)
                    .destroy()
          })
          .then((sueldo) => {
            if (!sueldo) {
              return res.status(400).send({ message: "sueldo Not Found" });
            }
            return sueldo
              .destroy()
              .then(() => res.status(204).send())
              .catch((error) => res.status(400).send(error));
          })
          .catch((error) => res.status(400).send(error));
      },

      UpdateEmpleado(req,res){
        return empleado
        .findByPk(req.body.id)
        .then((empleado) => {
          if (!empleado) {
            return res.status(404).send({ message: "empleado Not Found" });
          }
          return empleado
            .update({
                cedula: req.body.cedula || empleado.cedula,
                nombres: req.body.nombres || empleado.nombres,
                apellidos: req.body.apellidos || empleado.apellidos,
                salario: req.body.salario || empleado.salario,
                telefono: req.body.telefono || empleado.telefono,
                direccion: req.body.direccion || empleado.direccion,
                email: req.body.email || empleado.email,
                iddepartamento: req.body.iddepartamento || empleado.iddepartamento,
                idcargo: req.body.idcargo || empleado.idcargo,
            })
            .then(() => res.status(200).send(empleado))
            .catch((error) => res.status(400).send(error));
        })
        .catch((error) => res.status(400).send(error));
      },
}