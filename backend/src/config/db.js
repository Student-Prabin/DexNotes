import mongoose from 'mongoose'

export const connectDB= async ()=>{
    try {
       await mongoose.connect(process.env.MONGO_URI)
       console.log("DB connected successully")

    } catch (error) {
       console.error("error connecting to DB",error) 
       process.exit(1) //exits with failure
    }
}