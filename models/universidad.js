const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UniversidadSchema = new Schema({
  nombre: { type: String, required: true },
  direccion: { type: String , required: true },
  telefono: { type: String , required: true },
  fecCrea: { type: Date, default: new Date()},
  fecActualiza: { type: Date, default: new Date() },
});

module.exports = mongoose.model("universidad", UniversidadSchema);