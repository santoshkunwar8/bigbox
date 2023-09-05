const FileModel = require("../../models/FileModel/FileModel")






class FileControllers{


    // add room 
        async createFile(req,res){
        try {

            let newFile  =    await FileModel.create(req.body)
            newFile = newFile.populate(["user","room"]);
            return res.status(200).json({message:newFile,success:true});


        } catch (error) {
            next(error)
        }
        }

        async getFile(req,res){

        const query = req.query;

        

        try {
            const files = await FileModel.find({...query}).populate(["user","room"]);
            return res.status(200).json({message:files,success:true})
        } catch (error) {
            next(error)
        }
        }


        // update room 

        async updateFile(req,res){

        const {id} = req.params;

        

        try {
            let  updatedFile = await FileModel.findByIdAndUpdate(id,
                {
                   $set:req.body 
                },
                {
                    new:true,
                    returnOriginal:false,
                    returnDocument:true
                });
            return res.status(200).json({message:updatedFile,success:true})
        } catch (error) {
            next(error)
        }
       }

        // delete room 
         async deleteFile(req,res){

        const {id} = req.params;

        try {
            await FileModel.deleteOne({_id:id})
            return res.status(200).json({message:"successfully deleted",success:true})
        } catch (error) {
            next(error)
        }
    }

}
module.exports = new FileControllers()
