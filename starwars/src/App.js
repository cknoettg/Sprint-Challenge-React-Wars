import React, { useState , useEffect }  from 'react';
import './App.css';
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

  return (
    <div className="App">
      <h1 className="Header">Rick and Morty Rule!</h1>
      <Character></Character>
    </div>
  );
}

export default App;
