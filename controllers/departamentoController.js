const { where } = require('sequelize');
const db = require('../models');
const departamento = require("../models").departamento_model;

module.exports = {
  addDepartamento(req, res) {
    return departamento
    .create({
        nombre: req.body.nombre,
    })
    .then((departamento) => res.status(200).send(departamento))
    .catch((error) => res.status(400).send(error));
},
list(req, res) {
    return departamento
      .findAll({})
      .then((departamento) => res.status(200).send(departamento))
      .catch((error) => {
        res.status(400).send(error);
      });
  },
  DeleteDepartamento(req, res) {
    return departamento
      .findByPk(req.params.id)
      .then((departamento) => {
        if (!departamento) {
          return res.status(400).send({ message: "departamento Not Found" });
        }
        return departamento
          .destroy()
          .then(() => res.status(200).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  UpdateDepartamento(req,res){
    return departamento
    .findByPk(req.params.id)
    .then((departamento) => {
      if (!departamento) {
        return res.status(404).send({ message: "departamento Not Found" });
      }
      return departamento
        .update({
          nombre: req.body.nombre || departamento.nombre,
        })
        .then(() => res.status(200).send(departamento))
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
  },
}