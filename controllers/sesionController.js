const { where } = require('sequelize');
const db = require('../models');
const sesion = require("../models").sesion_model;

module.exports = {
    getSesion(req, res) {
        return sesion
            .findOne({
                attributes: ['cedula','nombre','idRol'],
                where: {
                    user: req.params.user,
                    password:  req.params.password
                }
            })
            .then((sd) => {
                console.log(sd);
                if (!sd) {
                    return res.status(400).send({
                        message: 'Password or User incorrect',
                    });
                }
                return res.status(200).send(sd);
            })
            .catch((error) =>
                res.status(500).send(error));
    },

}