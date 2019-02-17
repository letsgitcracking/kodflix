import React from 'react';

export default function TVShow(props) {
    return <div className="item">
        <img src={props.logo} alt={`${props.name} Logo`} />
        <div className="overlay">
            <h2>{props.name}</h2>
        </div>
    </div>
}