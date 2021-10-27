const { response } = require('express');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');
const { generarJWT } = require('../helpers/generar-jwt')

const login = async(req, res) => {
    const { correo, password } = req.body; 

    try {
        // Verificar si el email existe
        const usuario = await Usuario.findOne({ correo })
        
        if(!usuario) {
            return res.status(400).json({
                msg: 'Usuario /password no son correctos - correo'
            })
        }
        //Si el usuario esta activo
        if(!usuario.estado) {
            return res.status(400).json({
                msg: 'Usuario /password no son correctos - estado: false'
            })
        }

        // Verificar contraseña
        const validPassword = bcryptjs.compareSync(password, usuario.password);

        if (!validPassword) {
            return res.status(400).json({
                msg: 'Usuario / password no son correctos - estado: false'
            });
        }
        //Generar el JWT
        const token = await generarJWT(usuario.id);

        res.json({
            msg: 'Login Ok',
            usuario,
            token
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
}

module.exports = {
    login
};