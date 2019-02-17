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
                <TVShow id='maninthehighcastle' name="The Man in the High Castle" logo={HighCastle} />
                <TVShow id='thebureau' name="The Bureau" logo={Bureau} />
                <TVShow id='mrrobot' name="Mr. Robot" logo={Robot} />
            </div>
            <div className="container">
                <TVShow id='strangerthings' name="Stranger Things" logo={StrangerThings} />
                <TVShow id='jackryan' name="Jack Ryan" logo={JackRyan} />
                <TVShow id='haltandcatchfire' name="Halt and Catch Fire" logo={HaltFire} />
            </div>
        </div>
    )
}