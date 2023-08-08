import React, { useState, useEffect } from 'react';
import axios from 'axios'

export default function Details(props) {
    const [ details, setDetails ] = useState(null);
    const { characterId, close} = props

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${characterId}`)
        .then(res => {setDetails(res.data)})
        .catch(err => {console.error(err)})
    }, [characterId])

    return (
        <div>
            <h3>Known Intel</h3>
            {
                details &&
                <div>
                <p>Height: {details.height}</p>
                <p>Mass: {details.mass}</p>
                <p>Hair Color: {details.hair_color}</p>
                <p>Skin Color: {details.skin_color}</p>
                <p>Eye Color: {details.eye_color}</p>
                <p>Birth Year: {details.birth_year}</p>
                <p>Gender: {details.gender}</p>
                </div>
            }
            <button onClick={close}>Close Intel</button>
        </div>
    )

}