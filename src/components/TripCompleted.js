import React, { Component } from 'react'


export class TripCompleted extends Component {
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
export default TripCompleted
