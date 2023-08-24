const { where } = require('sequelize');
const db = require('../models');
const devengado = require("../models").devengado_model;

module.exports = {
list(req, res) {
    return devengado
      .findAll({})
      .then((devengado) => res.status(200).send(devengado))
      .catch((error) => {
        res.status(400).send(error);
      });
  },
  UpdateDevengado(req,res){
    return devengado
    .findByPk(req.params.id)
    .then((devengado) => {
      if (!devengado) {
        return res.status(404).send({ message: "devengado Not Found" });
      }
      return devengado
        .update({
            alimentacion: req.body.alimentacion || devengado.alimentacion,
            vivienda: req.body.vivienda || devengado.vivienda,
            transporte: req.body.transporte || devengado.transporte,
            extra: req.body.extra || devengado.extra,
            fecha: req.body.fecha || devengado.fecha,
        })
        .then(() => res.status(200).send(devengado))
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
  },
}