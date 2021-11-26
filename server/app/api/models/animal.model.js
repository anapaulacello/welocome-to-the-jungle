const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnimalSchema = new Schema({
    id:{type:Number, required:true, unique:true},
    name: { type: String, required: true },
    isCarnivore:{ type: Boolean },
    familiy:{ type: Schema.Types.ObjectId, ref: "family"}
});

const Animal = mongoose.model("animal", AnimalSchema);
module.exports = Animal;