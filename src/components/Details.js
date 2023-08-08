import React, { useState, useEffect } from 'react';
import axios from 'axios'
import styled, { keyframes } from 'styled-components'

const StyledCard = styled.div`
background-color: darkgoldenrod;
opacity: 60%;
border-radius: 10%;
border: 2px solid;
color: brown;
padding: 10px;
width: 80%;

`


const StyledDetails = styled.div`
font-size: 1.5em;
color: black;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
border: 2px;
text-shadow:#C4A484 2px 0 10px;
`
const StyledButton = styled.button`
width: 15%;
height: 15%;
opacity: 50%;
color: black;
border-radius: 25%;

`

export default function Details(props) {
    const [ details, setDetails ] = useState(null);
    const { characterId, close} = props

    useEffect(() => {
        axios.get(`${characterId}`)
        .then(res => {setDetails(res.data)})
        .catch(err => {console.error(err)})
    }, [characterId])

    return (
        <StyledDetails>
            <h3>Target's Info</h3>
            {
                details &&
                <StyledCard>
                <p>Height: {details.height}</p>
                <p>Mass: {details.mass}</p>
                <p>Hair Color: {details.hair_color}</p>
                <p>Skin Color: {details.skin_color}</p>
                <p>Eye Color: {details.eye_color}</p>
                <p>Birth Year: {details.birth_year}</p>
                <p>Gender: {details.gender}</p>
                </StyledCard>
            }
            <StyledButton onClick={close}>Close Intel</StyledButton>
        </StyledDetails>
    )

}