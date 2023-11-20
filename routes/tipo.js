const express = require("express");
const router = express.Router();
const Tipo = require("../models/tipo");


router.post("/add", (req, res) => {
  const newTipo = new Tipo({
    nombre: req.body.nombre,
    fecCrea: req.body.fecCrea,
    fecActualiza: req.body.fecActualiza,
  });
  newTipo
    .save()
    .then(() => res.json("El tipo de proyecto ha sido agregado."))
    .catch((err) => res.status(400).json("Error: " + err));
});

// http://localhost:5000/tipos/ 
router.get("/", (req, res) => {
    Tipo.find()
    .then((tipos) => res.json(tipos))
    .catch((err) => res.status(400).json("Error: " + err));
});

// http://localhost:5000/tipos/delete/STUDENT_ID
router.delete("/delete/:id", (req, res) => {
    Tipo.findByIdAndDelete(req.params.id)
    .then(() => res.json("El tipo ha sido borrado..."))
    .catch((err) => res.status(400).json("Error: " + err));
});

// http://localhost:5000/tipos/update/STUDENT_ID
router.post("/update/:id", (req, res) => {
    Tipo.findById(req.params.id)
    .then((tipo) => {
        tipo.nombre = req.body.nombre;
        tipo.fecCrea = req.body.fecCrea;
        tipo.fecActualiza = req.body.fecActualiza;
        tipo
        .save()
        .then(() => res.json("El tipo de proyecto ha sido actualizado.."))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});


module.exports = router;