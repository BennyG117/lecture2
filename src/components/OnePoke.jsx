import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const OnePoke = () => {
  const { poke } = useParams();

    const [pic, setPic] =  useState('')


  const getPokeData = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${poke}`)
    //   .then((res) => console.log(res))
      .then(res=>setPic(res.data.sprites.front_default))
      .catch((err) => console.log(err));
  };

  //! NEED BLANK []
  useEffect(getPokeData, []);


  return <div>
  
    <h2>{poke.toLocaleUpperCase()}</h2>
    <img alt={poke} src={pic} width={500}></img>
  </div>;
};

export default OnePoke;

//! detects which pokemon was clicked from the list
// const OnePoke = () => {

//   const {poke} = useParams()

//     return (
//     <div>{poke}</div>
//   )
// }

// export default OnePoke
