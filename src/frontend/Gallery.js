import React from 'react';
import Header from './Header';
import TVShow from './TVShow';
import getTVShows from './tvshows-get';

export default function Gallery() {
    return (
        <div>
            <div className="container"><Header /></div>
            <div className="container">
                {
                    getTVShows().map(show => (
                        <TVShow
                            key={show.id}
                            id={show.id}
                            name={show.name}
                            logo={show.logo} />
                    ))
                }
            </div>
        </div>
    )
}

