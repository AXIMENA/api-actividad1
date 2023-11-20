const express = require("express");
const router = express.Router();
const Proyecto = require("../models/proyecto");

router.post("/add", (req, res) => {
  const newProyecto = new Proyecto({
    numero: req.body.numero,
    titulo: req.body.titulo,
    fecInicia: req.body.fecInicia,
    fecEntrega: req.body.fecEntrega,
    valor: req.body.valor,
    fecCrea: req.body.fecCrea,
    fecActualiza: req.body.fecActualiza,
    cliente:req.body.cliente,
    tipo:req.body.tipo,
    universidad:req.body.universidad,
    etapa:req.body.etapa,
  });
  newProyecto
    .save()
    .then(() => res.json("El proyecto ha sido agregado."))
    .catch((err) => res.status(400).json("Error: " + err));
});

// http://localhost:5000/generos/ 
router.get("/", (req, res) => {
    Proyecto.find()
    .then((proyectos) => res.json(proyectos))
    .catch((err) => res.status(400).json("Error: " + err));
});

// http://localhost:5000/peliculas/delete/STUDENT_ID
router.delete("/delete/:id", (req, res) => {
    Proyecto.findByIdAndDelete(req.params.id)
    .then(() => res.json("El proyecto ha sido borrado..."))
    .catch((err) => res.status(400).json("Error: " + err));
});

// http://localhost:5000/peliculas/update/STUDENT_ID
router.post("/update/:id", (req, res) => {
    Proyecto.findById(req.params.id)
    .then((proyecto) => {
        proyecto.numero = req.body.numero,
        proyecto.titulo = req.body.titulo,
        proyecto.fecInicia = req.body.fecInicia,
        proyecto.fecEntrega = req.body.fecEntrega,
        proyecto.valor = req.body.valor,
        proyecto.fecCrea = req.body.fecCrea,
        proyecto.fecActualiza = req.body.fecActualiza,
        proyecto.cliente = req.body.cliente,
        proyecto.tipo = req.body.tipo,
        proyecto.universidad = req.body.universidad,
        proyecto.etapa = req.body.etapa
        proyecto
        .save()
        .then(() => res.json("El proyecto ha sido actualizado.."))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});


module.exports = router;