import dotenv from "dotenv";
dotenv.config()
import express from "express";
import cors from 'cors';
const app = express()

app.use(cors({
    origin:'http://localhost:5173',
}))
const jokes = [
  { id: 1, joke: "Why don't scientists trust atoms? Because they make up everything!" },
  { id: 2, joke: "Why did the math book look sad? Because it had too many problems." },
  { id: 3, joke: "Why don't programmers like nature? It has too many bugs." },
  { id: 4, joke: "Why do Java developers wear glasses? Because they don't see sharp." },
  { id: 5, joke: "Why did the scarecrow win an award? Because he was outstanding in his field!" }
];



app.get("/",(req,res)=>{
    res.send("Hello world");
})

app.get("/api/jokes",(req,res)=>{
    res.json(jokes);
})

app.listen(process.env.PORT,()=>{
    console.log(`App is running at port : ${process.env.PORT}`);
})

