
const { createNotification, getNotification, deleteNotification } = require("../controllers/NotificationController/NotificationController");

const router = require("express").Router()

router.post("/create",createNotification );
router.get("/",getNotification);
router.delete("/:id",deleteNotification)




module.exports = router;    