import Note from "../models/Note.js"

export const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find().populate("createdBy", "name email");
        res.status(200).json(notes);
    } catch (error) {
        console.log("error in getAllNotes:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}

export const createNote = async (req, res) => {
    try {
        const { title, content } = req.body;

        const note = new Note({
            title,
            content,
            createdBy: req.user.id,
        });
        const savedNote = await note.save();
        await savedNote.populate("createdBy", "name email");
        
        res.status(201).json(savedNote);
    } catch (error) {
        res.status(500).json({ message: "Error in createNote Controller", error: error.message });
    }
}

export const editNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        
        // 1. Find the note first
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }

        // 2. Check if the logged-in user owns the note
        if (note.createdBy.toString() !== req.user.id) {
            return res.status(403).json({ message: "Not authorized to update this note" });
        }

        // 3. Update the note
        note.title = title !== undefined ? title : note.title;
        note.content = content !== undefined ? content : note.content;
        const updatedNote = await note.save();

        res.status(200).json(updatedNote);
    } catch (error) {
        res.status(500).json({ message: "Error in editNote Controller", error: error.message });
    }
}

export const deleteNote = async (req, res) => {
    try {
        // 1. Find the note first
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }

        // 2. Check if the logged-in user owns the note
        if (note.createdBy.toString() !== req.user.id) {
            return res.status(403).json({ message: "Not authorized to delete this note" });
        }

        // 3. Delete the note
        await Note.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Note deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error in deleteNote Controller", error: error.message });
    }
}

export const getNotebyId = async (req, res) => {
    try {
        const noteById = await Note.findById(req.params.id).populate("createdBy", "name email");
        if (!noteById) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json(noteById);
    } catch (error) {
        res.status(500).json({ message: "Error in getNotebyId Controller", error: error.message });
    }
}