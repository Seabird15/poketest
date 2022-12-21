import React, { useEffect } from "react";
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";

import { useState } from "react";

import axios from "axios";

const Main = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();

  const pokeFun = async () => {
    setLoading(true);
    const res = await axios.get(url);
    //console.log(res.data.results)
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
    //console.log(pokeData)
  };

  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      setPokeData((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };

  useEffect(() => {
    pokeFun();
  }, [url]);

  return (
    <>
      <div>
        <img src="./images/logopoke.png" className="mx-auto w-96"  alt=""/>
        {/* <h1 className="bg-orange-600 p-2.5">POKEMON</h1> */}
      </div>
      <div className="container">
        <div className="left-content">
          <Card
            pokemon={pokeData}
            loading={loading}
            infoPokemon={(poke) => setPokeDex(poke)}
          />

          <div className="btn-group">
            <button
              onClick={() => {
                setPokeData([]);
                setUrl(prevUrl);
              }}
              className="bg-gray-300 hover:bg-red-400 text-gray-800 font-bold py-2 px-4 rounded-l m-2"
            >
              Previous
            </button>
            <button
              onClick={() => {
                setPokeData([]);
                setUrl(nextUrl);
              }}
              className="bg-gray-300 hover:bg-red-400 text-gray-800 font-bold py-2 px-4 rounded-r"
            >
              Next
            </button>
          </div>
        </div>
        <div className="right-content">
          <Pokeinfo data={pokeDex} />
        </div>
      </div>
    </>
  );
};

export default Main;
