const { where } = require('sequelize');
const db = require('../models');
const sueldo = require("../models").sueldo_model;

module.exports = {
    updateSueldo(req, res) {
        return sueldo
            .findByPk(req.params.id)
            .then(sl => {
                if (!sl) {
                    return res.status(400).send({
                        message: 'sueldo Not Found',
                    });
                }
                return sl
                    .update({
                        diasT: req.body.diasT || sl.diasT,
                        horasExtras: req.body.horasExtras || sl.horasExtras,
                        vhora: req.body.vhora || sl.vhora,
                        bono: req.body.bono || sl.bono,
                        id_emp_res: req.body.id_emp_res || sl.id_emp_res
                    })
                    .then((sul) => res.status(200).send(sul))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
}