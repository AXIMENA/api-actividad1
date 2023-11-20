const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EtapaSchema = new Schema({
  nombre: { type: String, required: [true, 'Se requiere el nombre de ' ]},
  fecCrea: { type: Date, default: new Date()},
  fecActualiza: { type: Date,default: new Date(), required: true },
});

module.exports = mongoose.model("etapa", EtapaSchema);