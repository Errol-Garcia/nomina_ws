const { where } = require('sequelize');
const db = require('../models');
const nominaEmpleado = require("../models").nominaEmpleado_model;
const sueldodb = require("../models").sueldo_model;


module.exports = {
    updateNominaEmpleado(req, res) {

        const idempleado = req.body.edempleado;
        const devengadoTrans = 140606;

        const auxilioT = 0;
        const sueldo = req.body.sueldo;
        const diasT = req.body.diasT;
        const horasExtra = req.body.hotasExtra;
        const bono = req.body.bono;
        const vhora = req.body.vhora;

        if(sueldo <= 1160000){
            auxilioT = devengadoTrans;
        }
        const TotalBasic = (sueldo*diasT)/30;
        const extras = (vhora*horasExtra) + bono;

        const TotalesDevengados = TotalBasic+auxilioT;
        const salud = (TotalesDevengados-auxilioT)*(4/100);
        const pension = (TotalesDevengados-auxilioT)*(4/100);
        const arl = (TotalesDevengados-auxilioT)*(0.522/100);

        const TotalDescuento  = salud + pension + arl;
        const Neto = TotalesDevengados - TotalDescuento;
        const NetoPagar = Neto+extras;

        return Promise.all([
            sueldodb.findByPk(req.params.id),
            nominaEmpleado.findOne({
                id_empleado: idempleado})
        ])
        .then(([sl,nm]) => {
            if (!sl || !nm){
                return res.status(400).send({
                    message: 'registros Not Found',
                });
            }
            return sl.update({
                diasT: diasT || sl.diasT,
                horasExtras: horasExtra || sl.horasExtras,
                vhora: vhora || sl.vhora,
                bono: bono || sl.bono,
                idempleado: idempleado || sl.idempleado
            })
            .then((nm) => {
                return nm.update({
                    sueldoNeto: NetoPagar || nm.sueldoNeto
                })
                .then((actualizacion)=>{
                    return res.status(200).send({
                        sueldodb: sl,
                        nominaEmpleado: actualizacion
                });
            })
            .catch((error) => res.status(400).send(error));
        })
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
            /*.then(sl => {
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
            .catch((error) => res.status(400).send(error));*/
    },
}