const mongoose = require("mongoose");

password = process.env.pass

const connectionString = `mongodb+srv://sordyq:${password}@cluster0.wezicd9.mongodb.net/word?retryWrites=true&w=majority`

const connectdb = async ()=>{
    await mongoose.connect(connectionString)
    return console.log("DB is a BOMB")
}

module.exports = connectdb