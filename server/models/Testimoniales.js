const Sequelize = require('sequelize');
const BD = require('../config/db');
const testimoniales = BD.define('testimoniales', {
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    }
})
module.exports = testimoniales;