const express = require("express");
const router = express.Router();
const Etapa = require("../models/etapa");

router.post("/add", (req, res) => {
  const newEtapa = new Etapa({
    nombre: req.body.nombre,
    fecCrea: req.body.fecCrea,
    fecActualiza: req.body.fecActualiza,
  });
  newEtapa
    .save()
    .then(() => res.json("La etapa ha sido agregada."))
    .catch((err) => res.status(400).json("Error: " + err));
});

// http://localhost:5000/generos/ 
router.get("/", (req, res) => {
  Etapa.find()
    .then((etapas) => res.json(etapas))
    .catch((err) => res.status(400).json("Error: " + err));
});

// http://localhost:5000/peliculas/delete/STUDENT_ID
/* router.delete("/delete/:id", (req, res) => {
    Director.findByIdAndDelete(req.params.id)
    .then(() => res.json("El director ha sido borrado..."))
    .catch((err) => res.status(400).json("Error: " + err));
}); */

// http://localhost:5000/peliculas/update/STUDENT_ID
router.post("/update/:id", (req, res) => {
  Etapa.findById(req.params.id)
    .then((etapa) => {
        etapa.nombre = req.body.nombre;
        etapa.fecCrea = req.body.fecCrea;
        etapa.fecActualiza = req.body.fecActualiza;
        etapa
        .save()
        .then(() => res.json("La etapa ha sido actualizada."))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});


module.exports = router;