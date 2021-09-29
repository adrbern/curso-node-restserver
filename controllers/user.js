const { response } = require('express');

const usuariosGet = (req, res = response) => {
    const query = req.query;

    res.json({
        msg: "Get API controlador",
        ...query
    });
}

const usuariosPost = (req, res = response) => {
    const body = req.body;

    res.json({
        msg: "Post API controlador",
        ...body
    });
}

const usuariosPut = (req, res = response) => {
    const params = req.params;

    res.json({
        msg: "Put API controlador",
        ...params
    });
}

const usuariosPath = (req, res = response) => {
    res.json({
        msg: "Path API controlador"
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: "Delete API controlador"
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPath,
    usuariosDelete
}