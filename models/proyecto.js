const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProyectoSchema = new Schema({
  numero: { type: String, required: [true, 'Numero requerido'], unique :[true, 'El numero ya existe!'] },
  titulo: { type: String, required: [true, 'Se requiere un título'] },
  fecInicia: { type: Date, default: new Date()},
  fecEntrega: { type: Date, default: new Date() },
  valor: { type: String , required: true },
  fecCrea: { type: Date, default: new Date()},
  fecActualiza: { type: Date, default: new Date() },
  cliente: { type: Schema.Types.ObjectId , ref: 'Cliente' , required: true },
  tipo: { type: Schema.Types.ObjectId , ref: 'Tipo' , required: true },
  universidad: { type: Schema.Types.ObjectId , ref: 'Universidad' , required: true },
  etapa: { type: Schema.Types.ObjectId , ref: 'Etapa' , required: true },
  
});

module.exports = mongoose.model("proyecto", ProyectoSchema);