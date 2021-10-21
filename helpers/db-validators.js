const Role = require('../models/role');
const Usuario = require('../models/usuario');

const esRolValido = async ( rol = '' ) => {
    const existeRol = await Role.findOne({ rol });

    if (!existeRol) {
        throw new Error(`El rol ${rol} no esta registado en la BD`);
    }
}

const emailValidado = async (correo) => {
    // verificar si el correo existe
    const existeEmail = await Usuario.findOne({ correo });

    if (existeEmail) {
       throw new Error('el correo ya esta registrado');
    }
}

const existeUsuarioPorId = async(id) => {
    const existeUsuario = await Usuario.findById(id);

    if (!existeUsuario) {
        throw new Error(`El correo ${id} ya esta registrado`)
    }
}

module.exports = {
    esRolValido,
    emailValidado,
    existeUsuarioPorId
};