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

        async loginUser(req,res,next){
          const {email,password:loginPw}  = req.body;
          try {

            if(!email || !loginPw){
              throw new Error("invalid credentials")
            }

            const user = await UserModel.findOne({email});
            if(!user) throw new Error("invalid credentails");
            const {password,...other} = user._doc;
            if(password!==loginPw) throw new Error("invalid credentails");
            res.status(200).json({message:other,success:true})

          } catch (error) {
            console.log(error)
              next(error)
          }
        }

     

        async searchUser(req, res) {

            const { userId } = req.query;
            let keyword = {};
            try {
              if (!userId) {
                keyword = req.query.search_query
                  ? {
                      $or: [
                        {
                          username: { $regex: req.query.search_query, $options: "i" },
                        },
                      
                        { email: { $regex: req.query.search_query, $options: "i" } },
                      ],
                    }
                  : {};
              } else {
                keyword = { _id: userId };
              }
              const fetchedUser = await UserModel.find(keyword);
              res.status(200).json({ message: fetchedUser, success: true });
            } catch (error) {
              console.log(error);
              res.status(500).json({ message: error, success: false });
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


