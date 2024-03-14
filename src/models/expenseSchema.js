const mongoose = require("mongoose");

const expensesSchema = new mongoose.Schema({
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
  },
  payment_method: {
    type: String,
    enum: ["cash", "bank", "bkash", "roket", "nogod"],
  },
  amount: {
    type: Number,
    required: true,
  },
  note: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Expense = mongoose.model("Expense", expensesSchema);

module.exports = Expense;