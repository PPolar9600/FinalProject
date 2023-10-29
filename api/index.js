import express from "express";
const app = express();
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"
import commentRoutes from "./routes/comments.js"
import likeRoutes from "./routes/likes.js"
import cors from "cors"
import cookieParser from "cookie-parser"

//middlewares
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Credentails", true)
    next()
})
app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)
app.use("/api/comments", commentRoutes)
app.use("/api/likes", likeRoutes)

app.get('/', (req, res) => {
    res.send('hello world')
  })
  
app.listen(8080, ()=>{
    console.log("API working!")
})