const { createUser, getUser, updateUser, deleteUser, searchUser } = require("../controllers/UserController/UserController");

const router = require("express").Router()

router.post("/create",createUser );
router.get("/",searchUser)
router.put("/:id",updateUser)
router.delete("/:id",deleteUser)





module.exports = router;