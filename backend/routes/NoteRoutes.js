const { createNote, getNote, updateNote, deleteNote } = require("../controllers/NoteController/NoteController");

const router = require("express").Router()

router.post("/create",createNote );
router.get("/",getNote)
router.put("/:id",updateNote)
router.delete("/:id",deleteNote)


module.exports = router;