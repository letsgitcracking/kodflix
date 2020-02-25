import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import getTVShows from '../../backend/shows-list';
import './TVShowDetails.css';

export default class TVShowDetails extends Component {

    constructor() {
        super();
        this.state = {
            TVShow: {}
        };
    }

    componentDidMount() {
        let TVShowDetails = this.props.match.params.TVShowDetails;
        let TVShow = getTVShows().find(show => show.id === TVShowDetails);
        this.setState({ TVShow });

        fetch('/rest/shows-list')
            .then(response => response.json())
            .then(data => {
                console.log(data)
            });
    }

    render() {
        if (this.state.TVShow === undefined) {
            return <Redirect to='/not-found' />;
        } else {
            return (
                <div>
                    <div>
                        <h1 >{this.state.TVShow.name}</h1>
                    </div>
                    <div className='content'>
                        <img
                            src={this.state.TVShow.logo}
                            alt={this.state.TVShow.name} />
                        <div className='synopsis'>{this.state.TVShow.synopsis}</div>
                    </div>

                    <Link to='/'>Back to home page</Link>
                </div>
            )
        }
    }
}