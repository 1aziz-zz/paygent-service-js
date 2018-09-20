var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var paymentSchema = new Schema({
  description: { type: String, required: [true] },
  amount: { type: Schema.Types.Decimal128, required: [true] },
  isPaid: Boolean,
  usedCurrency: { type: String, enum: ["USD", "EUR"] },
  expenseList: [{ type: Schema.Types.ObjectId, ref: "Expense", default: [] }],
  group: groupSchema,
  createdBy: memberSchema,
  createdTime: { type: Date, default: Date.now }
});

var Payment = mongoose.model("Payment", paymentSchema);
module.exports = Payment;