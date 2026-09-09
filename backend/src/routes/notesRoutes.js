 import express from "express"
import { createNote, deleteNote, editNote, getAllNotes, getNotebyId } from "../controllers/notesController.js";
import { protect } from "../middleware/authMiddleware.js";

 const router = express.Router();

 
router.get("/",protect,getAllNotes)
router.get("/:id",protect,getNotebyId)

router.post("/",protect,createNote)

router.put("/:id",protect,editNote)

router.delete("/:id", deleteNote)

export default router;