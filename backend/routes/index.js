module.exports = (app)=>{

    app.use("/api/user",require("../routes/UserRoutes"));
    app.use("/api/note",require("../routes/NoteRoutes"))
    app.use("/api/notification",require("../routes/NotificationRoutes"))
    app.use("/api/room",require("../routes/RoomRoutes"))
    // app.use("/api/file",require("../routes/FileRoutes"))

}