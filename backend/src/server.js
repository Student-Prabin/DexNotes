import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import notesRoutes from './routes/notesRoutes.js'; 
import { connectDB } from "./config/db.js";
import { rateLimit } from "./middleware/ratelimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001

app.use(cors({
    origin:"http://localhost:5173",
}))
app.use(express.json());
app.use(rateLimit)

app.use("/api/notes", notesRoutes);

connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log("server started at port :",PORT)
    });

});

