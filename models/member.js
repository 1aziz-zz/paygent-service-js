var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var memberSchema = new Schema({
  firstName: { type: String, required: [true] },
  lastName: { type: String, required: [true] },
  email: { type: String, required: [true], trim: true },
  password: { type: String, required: [true] },
  groups: [{ type: Schema.Types.ObjectId, ref: "Group" }]
});

var Member = mongoose.model("Member", memberSchema);
module.exports = Member;