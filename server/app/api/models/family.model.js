const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FamilySchema = new Schema({
    id:{type:Number, required:true,unique:true},
    name: { type: String, required: true },
    livingInGroup:{ type: Boolean },
    habitat:{ type: Schema.Types.ObjectId, ref: "habitat"}
});

const Family = mongoose.model("family", FamilySchema);
module.exports = Family;