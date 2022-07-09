const sql = require("./db.js");

const Category = function(category) {
    this.id = category.id;
    this.name = category.name;
};

Category.findById = (id, result) => {
    sql.query(`SELECT * FROM category WHERE id = ${id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
        console.log("Categoria encontrada: ", res[0]);
        result(null, res[0]);
            return;
        }
    
        result({ kind: "Categoria no encontrada" }, null);
  });
};

Category.getAll = (result) => {
  let query = "SELECT * FROM category";

    sql.query(query, (err, res) => {
    if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
    }
    console.log("category: ", res);
    result(null, res);
    });
};

module.exports = Category;