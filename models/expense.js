var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var expenseSchema = new Schema({
  paidAmount: Schema.Types.Decimal128,
  leftAmount: Schema.Types.Decimal128,
  reminderId: String,
  assignedMemberId: { type: Schema.Types.ObjectId, ref: 'Member'  }
});

var Expense = mongoose.model("Expense", expenseSchema);
module.exports = Expense;
