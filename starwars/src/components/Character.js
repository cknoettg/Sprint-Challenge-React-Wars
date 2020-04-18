// Write your Character component here
import React, { useState } from 'react';

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

const Characters = props => {

    const [character, setCharacter] = useState(props.character);

    return (
        <div>
            {Character.map(element => {
                return <Character character={element} />;
            })}
        </div>
    )
}

export default Character;