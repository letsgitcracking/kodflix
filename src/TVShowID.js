import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './TVShowID.css';
import getTVShows from './tvshows-get';

export default class TVShowID extends Component {

    constructor() {
        super();
        this.state = {
            TVShow: {}
        };
    }

    componentDidMount() {
        let TVShowID = this.props.match.params.TVShowID;
        let TVShow = getTVShows().find(show => show.id === TVShowID);
        this.setState({ TVShow });
    }

    render() {
        if (this.state.TVShow === undefined) {
            return <Redirect to='/not-found' />;
        } else {
            return (
                <div>
                    <br />
                    <h1>{this.state.TVShow.name}</h1>
                    <Link to='/'>Back to home page</Link>
                </div>
            )
        }
    }
}