import React, { useState , useEffect }  from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  //https://rickandmortyapi.com/api/character/?name=rick&status=alive
  //id, name, status, species, type, gender, origin,
  // location, image, epsiode, url, created

  //useState
  const [card, setCard] = useState([]);

  //axios get, useEffect
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character")
    .then(response => {
        console.log(response.data);
        setCard(response.data);
    })
    .catch(error => {
        console.log("Error retrieving data");
    })
}, []);


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character></Character>
    </div>
  );
}

export default App;
