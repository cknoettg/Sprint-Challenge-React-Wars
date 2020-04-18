// Write your Character component here
import React, { useEffect, useState } from 'react';
import Image from "./Image";
import axios from 'axios';
import styled from 'styled-components';

//https://rickandmortyapi.com/api/character/?name=rick&status=alive
  //id, name, status, species, type, gender, origin,
  // location, image, epsiode, url, created

//for this project, we are going to lump elements together
// - can create separate js files for them in the future, if needed

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

const Character = props => {

    const [character, setCharacter] = useState(props.character);

    //axios get, useEffect
    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character/2")
        .then(response => {
            console.log(response.data);
            setCharacter(response.data);
        })
        .catch(error => {
            console.log("Error retrieving data");
        })
    }, []);

    return (
        <div>
            {/* we will revisit our map later - perhaps it goes in app */}
            {/*character.map(element => {
                return {element};
            })*/}

            {/* initial test */}
            {console.log(props.image)}
            <Image imag={props.image} />
            
        </div>
    )
}

export default Character;