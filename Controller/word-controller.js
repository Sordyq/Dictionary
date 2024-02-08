const wordModel = require("../Model/word")

const createWord = async (req, res) =>{
    const {word, meaning, example} = req.body;
    try{
        const newWord = new wordModel({word, meaning, example})
        const savedWord = await newWord.save();
        return res.status(201).json({msg: "new word created", newWord})
    } catch (error) {
        console.error(error)
        return res.status(500).json({error: "server error"})
    }
}

const getWord = async (req, res) =>{
    try{
        const getWord = await wordModel.find();
        res.json(getWord)
    } catch (error){
        console.error(error)
        return res.status(500).json({error:"server error"})
    }
}

const singleWord = async (req, res) =>{
    try{
        const wordId = req.params.wordId;
        const word = await wordModel.findOne(wordId)
        if(!word){
            return res.status(404).json({error:"word not found"});
        }
        res.json(word);
    } catch (error){
        console.error(error);
        return res.status(500).json({error:"server error"})
    }
}

const updateWord = async (req, res) =>{
    try{
        const wordId = req.params["id"]
        const {word, meaning, example} = req.body;
        const updatedWord = await wordModel.findOneAndUpdate({_id:wordId}, req.body,
            {new:true, runValidators:true});
        if(!updatedWord){
            return res.status(404).json({error:"word not updated"})
        }
        res.json(updatedWord)
    } catch (error){
        console.error(error)
        return res.status(500).json({error:"server error"})
    }
}

const deleteWord = async (req, res) =>{
    const _id = req.params["id"];
    const sameId = await wordModel.findById({_id});
    if(sameId){
        await wordModel.findOneAndDelete({_id});
        return res.json({msg: "word deleted successfully"})
    }
    res.json({error:"no word found"})
}

module.exports = {
    createWord,
    getWord,
    singleWord,
    updateWord,
    deleteWord
}