// Write your Character component here
import React, { useEffect, useState } from 'react';
import Image from "./Image";
import Name from "./Name";
import Id from "./Id"
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

const NameColor = styled.h3`
    background-color: grey;
    width: 25%;
    margin: 0 auto;
`;

const PColor = styled.p`
    background-color: grey;
    width: 25%;
    margin: 0 auto;
`;

const DivColor = styled.div`
    background-color: green;
    width: 25%;
    margin: 0 auto;
`;

const Character = () => {

    //grab by id, set boundary
    //const [ids, setIds] = useState([]);

    const [character, setCharacter] = useState([]);
    

    //axios get, useEffect
    useEffect(() => {
        //axios.get(`https://rickandmortyapi.com/api/character/${character.id}`)
        axios.get(`https://rickandmortyapi.com/api/character/2`)
        .then(response => {
            console.log(response.data);
            setCharacter(response.data);
        })
        .catch(error => {
            console.log("Error retrieving data");
        })
    }, []);

    return ( 
        [<DivColor><div class="top">
            {/* we will revisit our map later - perhaps it goes in app */}
            {/*character.map(element => {
                return {element};
            })*/}
            <Image imag={character.image} />
            <NameColor><Name name={character.name}/></NameColor>
        </div></DivColor>,
        <DivColor><div class="bottom">
            <PColor><Id id={character.id} /></PColor>
            <PColor><p>Status: {character.status}</p></PColor>
            {/* "Species:" {character.species}
            "Gender:" {character.gender}
            "Origin:" {character.origin} */}
        </div></DivColor>]
    )
}

export default Character;