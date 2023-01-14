const express = require("express");
const initModels = require("./models/init.models");
const userRouter = require("./routes/users.routes");
const db = require("./utils/database");

const app = express();

app.use(express.json());
app.use("/api/v1", userRouter);

const PORT = 8000;

app.get("/", (req, res) => {
  res.json({ message: "bienvenido al servidor" });
});

db.authenticate()
  .then(() => console.log("autenticacion exitosa"))
  .catch((error) => console.log(error));

initModels();

db.sync({ force: false })
  .then(() => console.log("base de datos sincronizada"))
  .catch((error) => console.log(error));

app.listen(PORT, () => {
  console.log("Servidor corriendo en el puerto: ", PORT);
});
