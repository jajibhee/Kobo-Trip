import React, { Component } from 'react'
import TripItem from "./TripItem";


class Trip extends Component {
  render() {

    return this.props.trips.map((trip) => (

      <TripItem />
    ))

  }
}


export default Trip
