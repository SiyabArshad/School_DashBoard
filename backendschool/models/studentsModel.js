const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  first_name: { type: String, default: null },
  last_name: { type: String, default: null },
  uniquenumer: { type: String, unique: true },
  phone: { type: String },
  birthdate: { type: Date },
  registerDate: { type: Date },
  emergency_contact_name: { type: String },
  Emergency_contact_phone: { type: String },
  medical: { type: String },
  comments: { type: String },
  clientID:{ type: String, unique: true },
});

module.exports = mongoose.model("student", studentSchema);