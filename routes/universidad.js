const express = require("express");
const router = express.Router();
const Universidad = require("../models/universidad");

router.post("/add", (req, res) => {
  const newUniversidad = new Universidad({
    nombre: req.body.nombre,
    direccion: req.body.direccion,
    telefono:req.body.telefono,
    fecCrea: req.body.fecCrea,
    fecActualiza: req.body.fecActualiza,
  });
  newUniversidad
    .save()
    .then(() => res.json("La universidad ha sido agregada."))
    .catch((err) => res.status(400).json("Error: " + err));
});

// http://localhost:5000/generos/ 
router.get("/", (req, res) => {
  Universidad.find()
    .then((productoras) => res.json(productoras))
    .catch((err) => res.status(400).json("Error: " + err));
});

// http://localhost:5000/peliculas/delete/STUDENT_ID
router.delete("/delete/:id", (req, res) => {
  Universidad.findByIdAndDelete(req.params.id)
    .then(() => res.json("La universidad ha sido borrada..."))
    .catch((err) => res.status(400).json("Error: " + err));
});

// http://localhost:5000/peliculas/update/STUDENT_ID
router.post("/update/:id", (req, res) => {
  Universidad.findById(req.params.id)
    .then((universidad) => {
        universidad.nombre = req.body.nombre;
        universidad.direccion = req.body.direccion;
        universidad.telefono = req.body.telefono;
        universidad.fecCrea = req.body.fecCrea;
        universidad.fecActualiza = req.body.fecActualiza;
        universidad
        .save()
        .then(() => res.json("La universidad ha sido actualizada.."))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});


module.exports = router;