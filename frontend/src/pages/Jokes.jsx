import { useEffect } from "react";
import axios from "axios";
import { useState } from "react"
 

export const Jokes = () => {
    const [jokes,SetJokes] = useState([]);
    
    

    useEffect(()=>{
    axios.get("api/jokes")
    .then((res)=>{
       SetJokes(res.data);
    }).catch((err)=>{
        console.error(err);
    })
    },[])
    
    console.log(jokes)
    return (
        <>
        <div style={{margin:"10rem"}}>
        {
            jokes.map((curJokes)=>{
             return   (
                
                    <h1 style={{color:"#000"}} key={curJokes.id}>{curJokes.joke}</h1>
                
             )
            })
        }
        </div>
        </>
    )
}