import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const AllPoke = () => {

    const [pokemon, setPokemon] = useState([])

    const getPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=1281")
        // .then(res=>console.log(res))
        .then(res=>setPokemon(res.data.results))
        .catch(err=>console.log(err))
    }

    //! **ALWAYS ADD EMPTY BRACKETS TO STOP FROM INIFINITE CALLS**
useEffect(getPokemon, [])


  return (
    <div>
        {/* add ternary operator here  - catch if still loading or less than 1*/}
        {pokemon.length < 1 ? 
        <p>Loading...</p>
        :
        pokemon.map((poke, i )=> {
            return (
                //? poke.name gives us the list of names
                // <p>{poke.name}</p>
                //? below provides links to each pokemon details
                <>
                <Link to={`/one/${poke.name}`}>{poke.name}</Link>
                <hr/>
                </>
                )
        })    
    }

    </div>
  )
}

export default AllPoke