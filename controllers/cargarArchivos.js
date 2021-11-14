const { response } = require('express');
const { subirArchivo } = require('../helpers');

const cargarArchivo = async(req, res = response) => {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send({
            msg:  'No files were uploaded.'
        });
    }

    if (!req.files.archivo) {
        return res.status(400).send({
            msg:  'No files were uploaded.'
        });
    }

    const nombre = await subirArchivo(req.files);
    
    res.json({ nombre })
}

module.exports = {
    cargarArchivo
}