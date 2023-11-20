const express = require("express");
const router = express.Router();
const Cliente = require("../models/cliente");

router.post("/add", (req, res) => {
  const newCliente = new Cliente({
    nombre: req.body.nombre,
    mail: req.body.mail,
    fecCrea: req.body.fecCrea,
    fecActualiza: req.body.fecActualiza,
  });
  newCliente
    .save()
    .then(() => res.json("El cliente ha sido agregado."))
    .catch((err) => res.status(400).json("Error: " + err));
});


router.get("/", (req, res) => {
  Cliente.find()
    .then((clientes) => res.json(clientes))
    .catch((err) => res.status(400).json("Error: " + err));
});


router.delete("/delete/:id", (req, res) => {
  Cliente.findByIdAndDelete(req.params.id)
    .then(() => res.json("El cliente ha sido borrado..."))
    .catch((err) => res.status(400).json("Error: " + err));
});


router.post("/update/:id", (req, res) => {
  Cliente.findById(req.params.id)
    .then((cliente) => {
      cliente.nombre = req.body.nombre;
      cliente.mail = req.body.mail;
      cliente.fecCrea = req.body.fecCrea;
      cliente.fecActualiza = req.body.fecActualiza;
      cliente
        .save()
        .then(() => res.json("El cliente ha sido actualizado.."))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});


module.exports = router;