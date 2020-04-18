// Write your Character component here
import React, { useEffect, useState } from 'react';
import Card from "./Main";
import axios from 'axios';
import styled from 'styled-components';

//https://rickandmortyapi.com/api/character/?name=rick&status=alive
  //id, name, status, species, type, gender, origin,
  // location, image, epsiode, url, created

//basic structure is going to be
// div
// character's img
// <h3> Name
// id
// div

// div
// status
// species
// gender
// origin
// last location
// div

const Character = () => {

    const [characters, setCharacter] = useState([]);    

    //axios get, useEffect
    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character`)
        .then(response => {
            console.log(response.data.results);
            setCharacter(response.data.results);
        })
        .catch(error => {
            console.log("Error retrieving data");
        })
    }, []);

    return ( 
        <div>
            {characters.map(character => <Card data={character}/>)}
        </div>
    )
}

export default Character;