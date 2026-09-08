 import express from "express"
import { createNote, deleteNote, editNote, getAllNotes, getNotebyId } from "../controllers/notesController.js";

 const router = express.Router();

 
router.get("/",getAllNotes)
router.get("/:id",getNotebyId)
router.post("/", createNote)
router.put("/:id", editNote)

router.delete("/:id", deleteNote)

export default router;