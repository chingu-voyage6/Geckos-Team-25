import React, { Component } from "react";
import "../css/card.css";

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-side card-front">
          <div className="card-top">
            <span className="card-top-info top-1">
              <i className="fas fa-top" />1
            </span>
            <span className="card-top-info top-2">$20/p</span>
            <span className="card-top-info bottom-1">
              <i className="fas fa-star" /> 5
            </span>
            <span className="card-top-info bottom-2">
              <i className="fas fa-map-marker-alt " /> 2.7m
            </span>
          </div>
          <div className="card-desc">
            <div className="desc-title">Food Hub</div>
            <div className="desc-address">404, New Delhi</div>
            <div className="desc-type">Restaurant</div>
            <div className="desc-time">9am - 9pm</div>
          </div>
        </div>
        <div className="card-side card-back">
          <div className="card-back-info">
            <div className="card-back-services">
              <h3>Services</h3>
              <p>Breakfast, Lunch</p>
            </div>
            <div className="card-back-cruisine">
              <h3>Cruisine</h3>
              <p>Chinese, italian</p>
            </div>
            <a className="btn btn-solid btn-white">View More</a>
            <a className="btn btn-solid btn-white">Book</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
