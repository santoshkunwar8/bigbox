const { createRoom, getRoom, updateRoom, deleteRoom } = require("../controllers/RoomController/RoomController");

const router = require("express").Router()

router.post("/create",createRoom );
router.get("/",getRoom)
router.put("/:id",updateRoom)
router.delete("/:id",deleteRoom)




module.exports = router;