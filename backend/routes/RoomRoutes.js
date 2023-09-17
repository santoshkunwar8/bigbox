const { createRoom, getRoom, updateRoom, deleteRoom, addCollaborator, removeCollaborator } = require("../controllers/RoomController/RoomController");

const router = require("express").Router()

router.get("/",getRoom)
router.put("/:id",updateRoom)
router.delete("/:id",deleteRoom)
router.post("/create",createRoom );
router.post("/invite/:roomId",addCollaborator)
router.post("/removeCollaborator/:id",removeCollaborator)


module.exports = router;