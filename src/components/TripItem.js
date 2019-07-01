import React, { Component } from 'react'

export class TripItem extends Component {
  render() {
    return (
      <div style={tripStyle}>
        <div className="container">
          <ul className="progress">
            <li>{this.props.trip.status}
              <p className="date-details">{this.props.trip.date}</p>
            </li>
          </ul>
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
export default TripItem
