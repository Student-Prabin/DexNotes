import Note from "../models/Note.js"


export const getAllNotes= async (req,res)=>{
    try {
       const notes = await Note.find().sort({createdAt:-1})
       res.status(200).json(notes)
    } catch (error) {
        console.log("error in getAllNotes:",error)
        res.status(500).json({message:"Internal Server Error",error:error.message})
    }
}

export const createNote = async (req,res)=>{
   try {
    const {title,content}= req.body;

    const note = new Note({title,content});
    const savedNote = await  note.save()
    res.status(200).json(savedNote)
   } catch (error) {
        res.status(500).json({message:"Error in createNote Controller",error:error.message})
   }
}

export const editNote = async (req,res)=>{
    try {
        const{title,content}=req.body
        const updatedNote = await Note.findByIdAndUpdate(req.params.id,{title,content},{new:true})
        res.status(200).json(updatedNote)
        if(!updatedNote) return res.status(404).json({message:"note not found"})
    } catch (error) {
        res.status(500).json({message:"Error in editNote Controller",error:error.message})
        
    }
}

export const deleteNote = async (req,res)=>{
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id)
        if(!deletedNote){
            res.status(404).json({message:"Note not found"})
        }
        res.status(200).json({message:"note deleted successfully"})
    } catch (error) {
        res.status(500).json({message:"Error in deleteNote Controller",error:error.message})
    }
}


export const getNotebyId = async (req,res)=>{
    try {
        const NoteById = await Note.findById(req.params.id)
        if(!NoteById){
            res.status(404).json({message:"Note not found"})
        }
        res.status(200).json(NoteById)
    } catch (error) {
        res.status(500).json({message:"Error in getNotebyId Controller",error:error.message})
    }
}