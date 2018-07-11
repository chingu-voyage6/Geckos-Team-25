import React, { Component } from "react";

class Table extends Component {
  render() {
    return (
      <ul className="table">
        <li>
          <div className="table-img-box">
            <i className="fas fa-angle-left  " />
          </div>
          <div className="table-text-box">
            <div className="table-text-head">Rate Status</div>
            <div className="table-text-desc">
              <div className="table-rate-box">
                <div className="table-rating r-3">3</div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="table-img-box">
            <i className="fas fa-angle-left  " />
          </div>
          <div className="table-text-box">
            <div className="table-text-head">Rate Status</div>
            <div className="table-text-desc">
              <div className="table-rate-box">
                <div className="table-rating r-4">4</div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="table-img-box">
            <i className="fas fa-angle-left  " />
          </div>
          <div className="table-text-box">
            <div className="table-text-head">Rate Status</div>
            <div className="table-text-desc">
              <div className="table-rate-box">
                <div className="table-rating r-5">5</div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    );
  }
}

export default Table;
