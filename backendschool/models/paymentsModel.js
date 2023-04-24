const mongoose = require("mongoose");

const paymentsSchema = new mongoose.Schema({
  student: { type: String, default: null },
  payment_date: { type: Date},
  reference: { type: String },
  amount: { type: Number },
  interes: { type: Number },
  discount: { type: Number },
  payment_mode: { type: String  },
});

module.exports = mongoose.model("payments", paymentsSchema);