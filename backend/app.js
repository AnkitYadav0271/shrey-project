import dotenv from "dotenv";
dotenv.config()
import express from "express";
import cors from 'cors';
const app = express()

app.use(cors({
    origin:'http://localhost:5173',
}))

env.config()



app.get("/",(req,res)=>{
    res.send("Hello world");
})

app.get("/api/jokes",(req,res)=>{
    res.json(jokes);
})

app.listen(process.env.PORT,()=>{
    console.log(`App is running at port : ${process.env.PORT}`);
})

