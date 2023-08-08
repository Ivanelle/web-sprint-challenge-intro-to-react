import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components'

const StyledCharacter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    text-shadow:#C4A484 2px 0 10px;
`
const StyledButton = styled.button`
opacity: 50%;
color: black;
border-radius: 25%;
`

export default function Character({info, action}) {
return (
    <StyledCharacter>
        <h2 >{info.name}</h2>
        <StyledButton onClick={() => action(info.url)}>
            Known Intel
        </StyledButton>

    </StyledCharacter>
)
}
