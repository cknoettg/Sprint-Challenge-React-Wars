// Write your Character component here
import React, { useState } from 'react';
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

    return (
        <div>
            {/* we will revisit our map later - perhaps it goes in app */}
            {/* {Character.map(element => {
                return <Character character={element} />;
            })} */}

            {/* initial test */}
            <h1>Rick and Morty Rule!</h1>
        </div>
    )
}

export default Character;