module.exports = app => {
    const products = require("../controllers/controllers.js");
    const category = require("../controllers/category.controller.js");
    var router = require("express").Router();
    
    router.get("/products", products.findAll);
    router.get("/products/category/:id", products.findByCategory);
    router.get("/products/:id", products.findOne);

    router.get("/products/name/:name", products.findByName);

    router.get("/category", category.findAll);
    router.get("/category/:id", category.findOne);
    app.use('/api/bsale', router);
    };