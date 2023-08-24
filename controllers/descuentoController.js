const { where } = require('sequelize');
const db = require('../models');
const descuento = require("../models").descuento_model;

module.exports = {
  addDescuento(req, res) {
    return descuento
    .create({
        arl: req.body.arl,
        salud: req.body.salud,
        pension: req.body.pension,
        parafiscal: req.body.parafiscal,
        fecha: req.body.fecha,
    })
    .then((descuento) => res.status(200).send(descuento))
    .catch((error) => res.status(400).send(error));
},
list(req, res) {
    return descuento
      .findAll({})
      .then((descuento) => res.status(200).send(descuento))
      .catch((error) => {
        res.status(400).send(error);
      });
  },
  DeleteDescuento(req, res) {
    return descuento
      .findByPk(req.params.id)
      .then((descuento) => {
        if (!descuento) {
          return res.status(400).send({ message: "descuento Not Found" });
        }
        return descuento
          .destroy()
          .then(() => res.status(200).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  UpdateDescuento(req,res){
    return descuento
    .findByPk(req.params.id)
    .then((descuento) => {
      if (!descuento) {
        return res.status(404).send({ message: "descuento Not Found" });
      }
      return descuento
        .update({
          arl: req.body.arl || descuento.arl,
          salud: req.body.salud || descuento.salud,
          pension: req.body.pension || descuento.pension,
          parafiscal: req.body.parafiscal || descuento.parafiscal,
          fecha: req.body.fecha || descuento.fecha,
        })
        .then(() => res.status(200).send(descuento))
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
  },
}