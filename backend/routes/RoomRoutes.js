const { createRoom, getRoom, updateRoom, deleteRoom, addCollaborator, removeCollaborator, countUserRoom, getPublicRooms } = require("../controllers/RoomController/RoomController");

const router = require("express").Router()

router.get("/",getRoom)
router.put("/:id",updateRoom)
router.delete("/:id",deleteRoom)
router.post("/create",createRoom );
router.get("/count/:userId",countUserRoom)
router.post("/invite/:roomId",addCollaborator)
router.post("/removeCollaborator/:id",removeCollaborator)
router.get("/public",getPublicRooms)

module.exports = router;