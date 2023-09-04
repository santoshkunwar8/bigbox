const NotifyModel = require("../../models/NotificationModel/NotificationModel")



class NotificationController{


    // add room 
        async createNotification(req,res){
        try {

            let newRoom  =    await NotifyModel.create(req.body);
            newRoom = newRoom.populate(["user"]);
            return res.status(200).json({message:newRoom,success:true});


        } catch (error) {
            next(error)
        }
        }

        async getNotification(req,res){

        const query = req.query;

        

        try {
            const rooms = await NotifyModel.find({...query}).populate(["user"]).sort({createdAt:1})
            return res.status(200).json({message:rooms,success:true})
        } catch (error) {
            next(error)
        }
        }


      

        // delete room 
         async deleteNotification(req,res){

        const {id} = req.params;

        try {
            await NotifyModel.deleteOne({_id:id})
            return res.status(200).json({message:"successfully deleted",success:true})
        } catch (error) {
            next(error)
        }
    }

}
module.exports = new NotificationController()
