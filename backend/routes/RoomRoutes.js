const { createRoom, getRoom, updateRoom, deleteRoom, addCollaborator } = require("../controllers/RoomController/RoomController");

const router = require("express").Router()

router.post("/create",createRoom );
router.get("/",getRoom)
router.put("/:id",updateRoom)
router.delete("/:id",deleteRoom)
router.post("/invite/:roomId",addCollaborator)



module.exports = router;