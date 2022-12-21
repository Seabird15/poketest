import React from "react";

const Card = ({ pokemon, loading, infoPokemon }) => {
  console.log(pokemon);
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon.map((item) => {
          return (
            <>
              <div className="card bg-sky-500 hover:bg-red-200 cursor-pointer" key={item.id} onClick={()=>infoPokemon(item)}>
                <h2>{item.id}</h2>
                <img src={item.sprites.front_default} alt="" />
                <h2 className="font-extrabold">{item.name}</h2>
              </div>
            </>
          );
        })
      )}
    </>
  );
};

export default Card;
