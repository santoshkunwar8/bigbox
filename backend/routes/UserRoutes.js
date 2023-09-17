const { createUser, getUser, updateUser, deleteUser, searchUser, loginUser, sessionUser } = require("../controllers/UserController/UserController");

const router = require("express").Router()

router.post("/register",createUser );
router.post("/login",loginUser)
router.get("/",searchUser)
router.put("/:id",updateUser)
router.delete("/:id",deleteUser)
router.get("/sessionUser",sessionUser)





module.exports = router;