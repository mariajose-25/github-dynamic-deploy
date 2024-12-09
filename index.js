const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("¡Hola, mundo! Esta es la versión inicial para pruebas de majo.");
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
