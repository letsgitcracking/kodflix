import React from 'react';
import { Link } from 'react-router-dom';

export default function TVShow(props) {
    return <Link to={`/${props.id}`} className="item">
        <img src={props.logo} alt={`${props.name} Logo`} />
        <div className="overlay">
            <h2>{props.name}</h2>
        </div>
    </Link>
}