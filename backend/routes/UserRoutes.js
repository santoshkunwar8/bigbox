const { createUser, getUser, updateUser, deleteUser, searchUser, loginUser, sessionUser, logoutUser } = require("../controllers/UserController/UserController");

const router = require("express").Router()

router.post("/register",createUser );
router.post("/login",loginUser)
router.get("/",searchUser)
router.put("/:id",updateUser)
router.delete("/:id",deleteUser)
router.get("/sessionUser",sessionUser)
router.post("/logout",logoutUser)




module.exports = router;