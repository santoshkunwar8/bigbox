const NoteModel = require("../../models/NoteModel/NoteModel")




class NoteController{


    // add room 
        async createNote(req,res){
        try {

            let newNote  =    await NoteModel.create(req.body)
            newNote = newNote.populate(["user","room"]);
            return res.status(200).json({message:newNote,success:true});


        } catch (error) {
            next(error)
        }
        }

        async getNote(req,res){

        const query = req.query;

        

        try {
            const notes = await NoteModel.find({...query}).populate(["user","room"]);
            return res.status(200).json({message:notes,success:true})
        } catch (error) {
            next(error)
        }
        }


        // update room 

        async updateNote(req,res){

        const {id} = req.params;

        

        try {
            let  updatedNote = await NoteModel.findByIdAndUpdate(id,
                {
                   $set:req.body 
                },
                {
                    new:true,
                    returnOriginal:false,
                    returnDocument:true
                });
            return res.status(200).json({message:updatedNote,success:true})
        } catch (error) {
            next(error)
        }
       }

        // delete room 
         async deleteNote(req,res){

        const {id} = req.params;

        try {
            await NoteModel.deleteOne({_id:id})
            return res.status(200).json({message:"successfully deleted",success:true})
        } catch (error) {
            next(error)
        }
    }

}
module.exports = new NoteController()
