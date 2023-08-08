import React, { useState, useEffect } from 'react';
import axios from 'axios'
import styled, { keyframes } from 'styled-components'

import Character from './components/Character';
import Details from './components/Details';

const StyledApp = styled.div`
display: grid;
`
const StyledLeft = styled.div`
grid-column: 1;
`
const StyledRight = styled.div`
grid-column: 2;
`

const App = () => {
  const [characters, setCharacters] = useState([])
  const [currentCharacterId, setCurrentCharacterId] = useState(null)

  const openDetails = id => {
    setCurrentCharacterId(id)
  }

  const closeDetails = () => {
    setCurrentCharacterId(null)
  }
  
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then(res => {
      setCharacters(res.data)
    })
    .catch(err => {
      console.error(err)
    })

  }, [])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
  return (
    <div className="App">
      <h1 className="Header"></h1>
      <StyledApp>
        <StyledLeft>
      { characters.map(character => {
        return <Character key={character.id} info={character} action={openDetails}/>
      })}
        </StyledLeft>
        <StyledRight>
      {
        currentCharacterId && <Details characterId={currentCharacterId} close={closeDetails}/>
      }
        </StyledRight>
      </StyledApp>
    </div>
  );
}

export default App;
