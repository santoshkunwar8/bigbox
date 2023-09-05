const { createUser, getUser, updateUser, deleteUser } = require("../controllers/UserController/UserController");

const router = require("express").Router()

router.post("/create",createUser );
router.get("/",getUser)
router.put("/:id",updateUser)
router.delete("/:id",deleteUser)





module.exports = router;