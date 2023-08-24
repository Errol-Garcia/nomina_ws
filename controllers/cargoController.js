const { where } = require('sequelize');
const db = require('../models');
const cargo = require("../models").cargo_model;

module.exports = {
    list(req, res) {
      return cargo
        .findAll({})
        .then((cargo) => res.status(200).send(cargo))
        .catch((error) => {
          res.status(400).send(error);
        });
    },
    getById(req, res) {
        console.log(req.params.id);
        return cargo
            .findByPk(req.params.id)
            .then((cargo) => {
                console.log(cargo);
                if (!cargo) {
                    return res.status(404).send({
                        message: 'cargo Not Found',
                    });
                }
                return res.status(200).send(cargo);
            })
            .catch((error) =>
                res.status(400).send(error));
    },
};