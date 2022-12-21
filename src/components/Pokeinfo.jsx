import React from "react";


function Pokeinfo() {
  return (
    <>
      <h1>charmander</h1>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg" alt="charmander" />
      <div className="abilities">
        <div className="group">
          <h2>Blaze</h2>
        </div>
        <div className="group">
          <h2>solar-power</h2>
        </div>
        <div className="base-stat">
          <h3>hp:30</h3>
          <h3>attack:52</h3>
          <h3>defense:43</h3>
          <h3>special-attack:50</h3>
          <h3>speed</h3>
        </div>
      </div>
    </>
  )
}

export default Pokeinfo