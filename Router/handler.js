const express = require("express")
const { deleteWord, updateWord, singleWord, getWord, createWord } = require("../Controller/word-controller")

const router = express.Router()

router.route("/create-word").post(createWord)
router.route("/get-word").get(getWord)
router.route("/single-word/:id").get(singleWord)
router.route("/update-word/:id").patch(updateWord)
router.route("/delete-word/:id").delete(deleteWord)

module.exports = router