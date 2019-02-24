import React from 'react';
import Kodflix from './img/kodflix.png'

export default function Header() {
    return (
        <div className="container">
            <div className="logo">
                <img src={Kodflix} alt="Kodflix Logo" />
            </div>
        </div>
    )
}