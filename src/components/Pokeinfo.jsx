import React from "react";

const Pokeinfo = ({ data }) => {
   
    return (
        <>
        {
            (!data) ? "" : (
                <div className="bg-pink-200 w-50 m-10 p-4 rounded-xl shadow-2xl">
                    <h1>{data.name}</h1>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" />
                    <div className="abilities font-extrabold">
                        {
                            data.abilities.map(poke=>{
                                return(
                                    <>
                                     <div className="group">
                                        <h2>{poke.ability.name}</h2>
                                    </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="base-stat">
                        {
                            data.stats.map(poke=>{
                                return(
                                    <>
                                        <h3>{poke.stat.name}:{poke.base_stat}</h3>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            )
        }

        </>
    )
}
export default Pokeinfo