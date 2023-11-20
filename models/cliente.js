const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClienteSchema = new Schema({
  nombre: { type: String, required: true },
  mail: { type: String, required: true },
  fecCrea: { type: Date, default: new Date()},
  fecActualiza: { type: Date, default: new Date(), required: true },
});

module.exports = mongoose.model("cliente", ClienteSchema);