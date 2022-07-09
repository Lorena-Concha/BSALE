const sql = require("./db.js");

const Product = function(product) {
    this.id = product.id;
    this.name = product.name;
    this.url_image = product.url_image;
    this.price = product.price;
    this.discount = product.discount;
    this.category = product.category;
};

Product.findById = (id, result) => {
    sql.query(`SELECT * FROM product WHERE id = ${id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
        console.log("Producto encontrado: ", res[0]);
        result(null, res[0]);
            return;
        }
    
        result({ kind: "producto no encontrado" }, null);
  });
};

Product.getAll = (result) => {
  let query = "SELECT * FROM product";

    sql.query(query, (err, res) => {
    if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
    }
    console.log("products: ", res);
    result(null, res);
    });


    
};

Product.findByCategory = (idCategory, result) => {
    sql.query(`SELECT * FROM product WHERE category = ${idCategory}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
        console.log("Productos encontrado: ", res);
        result(null, res);
            return;
        }
    
        result({ kind: "productos no encontrado" }, null);
  });
};

Product.findByName = (name, result) => {
    sql.query(`SELECT * FROM product WHERE name LIKE CONCAT('%','${name}','%')`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
        console.log("ProductoS encontrado: ", res);
        result(null, res);
            return;
        }
    
        result({ kind: "productoS no encontrado" }, null);
  });
};


module.exports = Product;