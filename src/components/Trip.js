import React, { Component } from 'react'
import TripItem from "./TripItem";


class Trip extends Component {
  render() {
    return (
      <ul className="progress">
        {this.props.trips.map((trip) => (
          <TripItem trip={trip} />

        ))}
      </ul>

    )

  }
}


export default Trip
