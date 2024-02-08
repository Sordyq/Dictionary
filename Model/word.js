const mongoose = require("mongoose")
const {Schema, model} = mongoose

const wordSchema = new Schema({
    word: {
        type: String,
        required: true
    },
    meaning: {
        type: String,
        required: true
    },
    example: {
        type: String,
        required:true
    }
});

const wordModel = mongoose.model("word", wordSchema)
module.exports = wordModel