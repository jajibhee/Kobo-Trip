import React, { Component } from 'react'
import TripItem from "./TripItem";


class Trip extends Component {
  render() {

    return (


      <div>
        <div style={tripStyle}>
          <div className="container">
            <ul className="progress">
              <li>
                Accepted
                <p className="date-details">19-06-2019</p>
              </li>
              <li>
                Positioned
            <p className="date-details">19-06-2019</p>
              </li>
              <li>
                In Premise
            <p className="date-details">19-06-2019</p>
              </li>
              <li>
                Loaded
            <p className="date-details">19-06-2019</p>
              </li>
              <li className="currently">
                En-route
            <p className="date-details">19-06-2019</p>
              </li>
              <li>
                At Destination
            <p className="date-details">19-06-2019</p>
              </li>
              <li>
                Delivered
            <p className="date-details">19-06-2019</p>
              </li>
            </ul>
          </div>
          <TripItem />
        </div>
      </div>
    )
  }
}

const tripStyle = {
  display: 'flex',
  alignItems: 'center',
  height: '50vh',
  background: '#ccc'
}
export default Trip
