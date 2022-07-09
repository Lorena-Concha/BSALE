const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.json({ message: "Desafio BSALE by Lorena Concha" });
});

require("./routes/routes.js")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`El servidor corre en el puerto ${PORT}.`);
});


