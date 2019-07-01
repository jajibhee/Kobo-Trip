import React, { Component } from 'react'
import TripItem from "./TripItem";


class Trip extends Component {
  render() {
    return (
      <ul className="progress">
        {this.props.trips.map((trip) => (
          <li>{trip.status}
            <p className="date-details">{trip.date}</p>
          </li>
        ))}
      </ul>

    )

  }
}


export default Trip
