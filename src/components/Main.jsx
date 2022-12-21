import React, { useEffect } from "react";
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";

import { useState } from "react";

import axios from "axios";

const Main = () => {
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();

    const pokeFun=async()=>{
        setLoading(true)
        const res=await axios.get(url)
        //console.log(res.data.results)
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results)
        setLoading(false)
        //console.log(pokeData)
    }

    const getPokemon=async(res)=>{
        res.map(async(item)=>{
            const result=await axios.get(item.url)
            //console.log(result.data)
            setPokeData(state=>{
                state=[...state,result.data]
                return state;
            })
        })
    }


    useEffect(()=>{
        pokeFun();
    },[url])


return (
    <>
    <div className="container">
        <div className="left-content"> 
          <Card pokemon={pokeData} loading={loading}/>

          <div className="btn-group">
            <button className="bg-gray-300 hover:bg-red-400 text-gray-800 font-bold py-2 px-4 rounded-l m-2">Previous</button>
            <button className="bg-gray-300 hover:bg-red-400 text-gray-800 font-bold py-2 px-4 rounded-r">Next</button>
          </div>
        </div>
        <div className="right-content">
          <Pokeinfo/>  
        </div>
    </div>
    </>

)
}

export default Main

