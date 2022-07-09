const Category = require("../models/category.model.js");

    exports.findAll = (req, res) => {
        
        Category.getAll((err, data) => {
            if (err)
            res.status(500).send({
            message:
                err.message || "Ha ocurrido un error en findall Category"
            });
            else res.send(data);
        });
    };
exports.findOne = (req, res) => {
    Category.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
            res.status(404).send({
                message: `Categoria no encontrada con el id ${req.params.id}.`
            });
            } else {
            res.status(500).send({
                message: "Error en la busqueda de la Categoria id " + req.params.id
            });
            }
        } else res.send(data);
    });
};

