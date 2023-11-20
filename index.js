const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors')

const app = express();
app.use(bodyParser.json());

app.use(cors({
  origin: '*'
}))
const clientesRouter = require("./routes/cliente");
app.use("/clientes", clientesRouter);

const etapasRouter = require("./routes/etapa");
app.use("/etapas", etapasRouter);

const proyectosRouter = require("./routes/proyecto");
app.use("/proyectos", proyectosRouter);

const tiposRouter = require("./routes/tipo");
app.use("/tipos", tiposRouter);

const universidadRouter = require("./routes/universidad");
app.use("/universidades", universidadRouter);

const db = "mongodb://localhost/iudigital";
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.listen(5000, () => console.log("Servidor en ejecución por el puerto 5000"));


