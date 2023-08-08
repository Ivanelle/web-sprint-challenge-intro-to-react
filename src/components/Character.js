import React, { useState, useEffect } from 'react';
import { StyledComponent } from 'styled-components';

export default function Character({info, action}) {
return (
    <div>
        <h2 >{info.name}</h2>
        <button onClick={() => action(info.id)}>
            Known Intel
        </button>

    </div>
)
}
