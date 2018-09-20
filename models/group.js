var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var groupSchema = new Schema({
  title: { type: String, required: [true] },
  description: { type: String, required: [true] },
  createdBy: { type: Schema.Types.ObjectId, ref: 'Member'  },
  // NOTE: is the correct way of initializing stuff before assgining?
  // in Java: declare+initiate: List<Expense> expenseList = new ArrayList<>();
  members: [{ type: Schema.Types.ObjectId, ref: 'Member'  }],
  payments: [{ type: Schema.Types.ObjectId, ref: 'Payment'  }],
  createdTime: { type: Date, default: Date.now }
});

var Group = mongoose.model("Group", groupSchema);
module.exports = Group;