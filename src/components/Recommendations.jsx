import React, { Component } from 'react';
import '../App.css';

class Recommendations extends Component {

    addRecommendationToMyList(movie) {
        this.props.addRecommendationToMyList(movie);
    }

    render() {
        return (
           <div>somthingg</div>
        );
    }
}

export default Recommendations;