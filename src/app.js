const express = require("express");
const initModels = require("./models/init.models");
const db = require("./utils/database");

const app = express();

app.use(express.json());

const PORT = 8000;

app.get("/", (req, res) => {
  res.json({ message: "bienvenido al servidor" });
});

db.authenticate()
  .then(() => console.log("autenticacion exitosa"))
  .catch((error) => console.log(error));

initModels();

db.sync({ force: true })
  .then(() => console.log("base de datos sincronizada"))
  .catch((error) => console.log(error));

app.listen(PORT, () => {
  console.log("Servidor corriendo en el puerto: ", PORT);
});
