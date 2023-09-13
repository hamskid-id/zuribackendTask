const mongoose = require("mongoose");
const personSchema = new mongoose.Schema({
    name:{type: String, required: true},
    email:{type: String, required: true},
    age:{type: Number, required: true}
},{
    timestamps:true
})
const Person = mongoose.model("Person", personSchema)
exports.Person = Person;