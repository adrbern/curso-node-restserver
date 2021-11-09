
const Role = require('../models/role');
const { Usuario, Categoria, Producto } = require('../models');

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

const existeCategoria = async(id) => {
    const existeCategoria = await Categoria.findById(id);

    if (!existeCategoria) {
        throw new Error(`El categoria ${id} ya esta registrado`)
    }
}

const existeProducto = async(id) => {
    const existeProducto = await Producto.findById(id);

    if (!existeProducto) {
        throw new Error(`El producto ${id} ya esta registrado`)
    }
}

module.exports = {
    esRolValido,
    emailValidado,
    existeUsuarioPorId,
    existeCategoria,
    existeProducto
};