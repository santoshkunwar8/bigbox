const RoomModel = require("../../models/RoomModel/RoomModel")


class RoomController{


    // add room 
        async createRoom(req,res,next){
        try {

            let newRoom  =    await RoomModel.create(req.body);
            newRoom = await newRoom.populate(["user","collaborators"]);
            return res.status(200).json({message:newRoom,success:true});


        } catch (error) {
            next(error)
        }
        }

        async getRoom(req,res,next){

        const query = req.query;

        

        try {
            const rooms = await RoomModel.find({...query}).populate(["user","collaborators"]);
            return res.status(200).json({message:rooms,success:true})
        } catch (error) {
            next(error)
        }
        }


        // update room 

        async updateRoom(req,res,next){

        const {id} = req.params;

        

        try {
            let  updatedRoom = await RoomModel.findByIdAndUpdate(id,
                {
                   $set:req.body 
                },
                {
                    new:true,
                    returnOriginal:false,
                    returnDocument:true
                });
            return res.status(200).json({message:updatedRoom,success:true})
        } catch (error) {
            next(error)
        }
       }

       async addCollaborator(req,res,next){

        const {roomId} =req.params;
        const {user} = req.body;

        try {
            const room = await  RoomModel.findById(roomId);
            console.log(room._doc)

            const isCollaborator = room._doc.collaborators.some(u=>u.toString() ===user.toString());
            if(isCollaborator){
                throw Error("This user is already a collaborator")
            }
            const updatedRoom = await RoomModel.findByIdAndUpdate(roomId,{
                  $push: { collaborators: user } 
            },{
                new:true,
                returnOriginal:false,
                returnDocument:true
            })    
            return res.status(200).json({message:updatedRoom,success:true})
        } catch (error) {
            next(error)
        }

       }

        // delete room 
         async deleteRoom(req,res,next){

        const {id} = req.params;

        try {
            await RoomModel.deleteOne({_id:id})
            return res.status(200).json({message:"successfully deleted",success:true})
        } catch (error) {
            next(error)
        }
    }

}
module.exports = new RoomController()
