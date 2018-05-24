import React from 'react';

export const Counter = ({value , plus, minus}) => (
    <div>
        <span>{value}</span>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
    </div>
)
