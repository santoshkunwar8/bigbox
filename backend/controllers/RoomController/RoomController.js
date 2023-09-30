const RoomModel = require("../../models/RoomModel/RoomModel")


class RoomController{

    async countUserRoom(req,res,next){
        const {userId} = req.params;
        try {
           const publicRoom =  await RoomModel.find({user:userId,isPublic:true}).count()
           const privateRoom = await RoomModel.find({user:userId,isPublic:false}).count()

            res.status(200).json({message:{public:publicRoom,private:privateRoom}})

        } catch (error) {
            console.log(error)
            next(error)
        }
    }

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


    async removeCollaborator(req,res,next){
        const {id} = req.params;
        const {user} = req.body;
        try{
           const updated =   await RoomModel.findByIdAndUpdate(id,{
                $pull:{collaborators:user}
            },{
                new:true,
                returnDocument:true
            })
            res.status(200).json({message:updated,success:true})
        }catch(err){
            next(err)
        }
    }

   async getPublicRooms(req,res){
    try {


      const allRooms = await   RoomModel.aggregate([
        {
            $match:{
                isPublic:true
            }
        },  

   {
    $lookup: {
      from: "files", // Name of your files collection
      localField: "_id",
      foreignField: "room",
      as: "files",
    },
   },
   {
    $unwind: {
      path: "$files",
      preserveNullAndEmptyArrays: true,
    },
  },
  {
    $group: {
      _id: "$_id",
      name: { $first: "$name" },
      user: { $first: "$user" },
      isPublic: { $first: "$isPublic" },
      collaborators: { $first: "$collaborators" },
      totalSize: { $sum: "$files.size" },
    },
  },
])

        res.status(200).json({message:allRooms,success:true})


    } catch (error) {
            console.log(error)
            new(error)
    }
   }

}
module.exports = new RoomController()
