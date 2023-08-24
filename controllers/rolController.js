const { where } = require('sequelize');
const db = require('../models');
const rol = require("../models").rol_model;

module.exports = {

    getRolById(req, res) {

        console.log(req.params.id);
        return rol
            .findByPk(req.params.id,
                {
                    attributes: ['nombre','descriptcion']})
            .then((rl) => {
                console.log(rl);
                if (!rl) {
                    return res.status(400).send({
                        message: 'rol Not Found',
                    });
                }
                return res.status(200).send(rl);
            })
            .catch((error) =>
                res.status(500).send(error));
    },

}
