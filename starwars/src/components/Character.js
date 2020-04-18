// Write your Character component here
import React, { useState } from 'react';

//https://rickandmortyapi.com/api/character/?name=rick&status=alive
  //id, name, status, species, type, gender, origin,
  // location, image, epsiode, url, created

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