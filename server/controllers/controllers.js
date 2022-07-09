const Product = require("../models/models.js");

    exports.findAll = (req, res) => {
        
        Product.getAll((err, data) => {
            if (err)
            res.status(500).send({
            message:
                err.message || "Ha ocurrido un error"
            });
            else res.send(data);
        });
    };

exports.findOne = (req, res) => {
    Product.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
            res.status(404).send({
                message: `Producto no encontrado con el id ${req.params.id}.`
            });
            } else {
            res.status(500).send({
                message: "Error en la busqueda del producto id " + req.params.id
            });
            }
        } else res.send(data);
    });
};

exports.findByCategory = (req, res) => {
        
    Product.findByCategory(req.params.id,(err, data) => {
        if (err)
        res.status(500).send({
        message:
            err.message || "Ha ocurrido un error"
        });
        else res.send(data);
    });
};

exports.findByName = (req, res) => {
    Product.findByName(req.params.name, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
            res.status(404).send({
                message: `Producto no encontrado con el nombre ${req.params.name}.`
            });
            } else {
            res.status(500).send({
                message: "Error en la busqueda del producto nombre " + req.params.name});
            }
        } else res.send(data);
    });
};