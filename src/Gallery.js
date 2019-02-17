import React from 'react';
import Header from './Header';
import TVShow from './TVShow';
import Bureau from './img/thebureau_cover.jpg';
import HighCastle from './img/manhighcastle_cover.jpg';
import HaltFire from './img/haltcatchfire_cover.jpg';
import JackRyan from './img/jackryan_cover.jpg';
import Robot from './img/mrrobot_cover.jpg';
import StrangerThings from './img/strangerthings_cover.jpg';

export default function Gallery() {
    return (
        <div>
            <Header />
            <div className="container">
                <TVShow name="The Man in the High Castle" logo={HighCastle} />
                <TVShow name="The Bureau" logo={Bureau} />
                <TVShow name="Mr. Robot" logo={Robot} />
            </div>
            <div className="container">
                <TVShow name="Stranger Things" logo={StrangerThings} />
                <TVShow name="Jack Ryan" logo={JackRyan} />
                <TVShow name="Halt and Catch Fire" logo={HaltFire} />
            </div>
        </div>
    )
}