const UserModel = require("../../models/userModel/UserModel")



class UserController{


    // add room 
        async createUser(req,res,next){
        try {

            let newUser  =    await UserModel.create(req.body);
          
            return res.status(200).json({message:newUser,success:true});


        } catch (error) {
            next(error)
        }
        }

        async getUser(req,res,next){

        const query = req.query;

        

        try {
            const users = await UserModel.find({...query})
            return res.status(200).json({message:users,success:true})
        } catch (error) {
            next(error)
        }
        }


        // update room 

        async updateUser(req,res,next){

        const {id} = req.params;

        

        try {
            let  updatedUser = await UserModel.findByIdAndUpdate(id,
                {
                   $set:req.body 
                },
                {
                    new:true,
                    returnOriginal:false,
                    returnDocument:true
                });
            return res.status(200).json({message:updatedUser,success:true})
        } catch (error) {
            next(error)
        }
       }

        // delete room 
         async deleteUser(req,res,next){

        const {id} = req.params;

        try {
            await UserModel.deleteOne({_id:id})
            return res.status(200).json({message:"successfully deleted",success:true})
        } catch (error) {
            next(error)
        }
    }

};


module.exports = new UserController()


