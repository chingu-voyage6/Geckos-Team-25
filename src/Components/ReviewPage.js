import React, { Component } from "react";
import "../css/rev_page.css";
import "../css/card.css";
import Table from "./Table";
import Card from "./Card";
import Form from "./Form";
import Experiences from "./Experiences";
import { NavLink } from 'react-router-dom';

class ReviewPage extends Component {
  render() {
    const active = {
      color: '#f76c6c',
      textDecoration: 'none'
    };
    const def = {
      textDecoration: 'none',
      color: 'white'
    }
    
    return (
      <div className="review-page">
        <div className="header">
          <div className="header-back">
            <i className="fas fa-angle-left  " />
          </div>
          <div className="header-title">Food Hub</div>
        </div>

        <div className="top-links">
          <div className="btn btn-red"> 
          <NavLink exact style={def} activeClassName="btn-red" to='/form'> Rate </NavLink>
          </div>
 
          <div className="btn btn-red">Add a Story</div>
        </div>

        <div className="review-container">
          <div className="review-option-slider">
            <div className="review-option">Scores</div>
            <div className="review-option">Experiences</div>
            <div className="review-option">info</div>
            <div className="review-option">People</div>
            <div className="review-option">Menu</div>
            <div className="review-option">Book</div>
            <div className="review-option">Gallery</div>
          </div>
        </div>
       
        <Card />
        <Table />
        <Experiences />
      </div>
    );
  }
}

export default ReviewPage;
