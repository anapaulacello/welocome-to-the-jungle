const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HabitatSchema = new Schema({
    id: { type: Number, required: true ,unique:true},
    name: { type: String, required: true },
    location: { type: String, required: true },
    mode:{type:String, enum:["Tierra","Aire","Mar"]}
});

const Habitat = mongoose.model("habitat", HabitatSchema);
module.exports = Habitat;