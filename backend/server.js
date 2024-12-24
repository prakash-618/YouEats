import express from "express" 
import cors from"cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/useRoute.js"
import "dotenv/config"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"






// app config
const app = express()
const port =4000

// middleware
app.use(express.json())
app.use(cors())

// dbconnection
connectDB()

// api endpoint
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,resp)=>{
    resp.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})

// mongodb+srv://prakashranjan45890:Prakashranjan45890@cluster0.nsofv.mongodb.net/?

