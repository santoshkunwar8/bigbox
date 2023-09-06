const { createFile, getFile, updateFile, deleteFile } = require("../controllers/FileController/FileController");

const router = require("express").Router()

router.post("/create",createFile );
router.get("/",getFile)
router.put("/:id",updateFile)
router.delete("/:id",deleteFile)




module.exports = router;