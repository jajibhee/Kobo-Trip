import React, { Component } from 'react'


export class TripCompleted extends Component {
  render() {
    return (
      <div>
        <div style={tripStyle}>
          <div className="container">

            <ul className="progress">
              <li className="done">
                Accepted
            <p className="date-details">19-06-2019</p>
              </li>
              <li className="done">
                Positioned
            <p className="date-details">19-06-2019</p>
              </li>
              <li className="done">
                In Premise
            <p className="date-details">19-06-2019</p>
              </li>
              <li className="done">
                Loaded
            <p className="date-details">19-06-2019</p>
              </li>
              <li className="done">
                En-route
            <p className="date-details">19-06-2019</p>
              </li>
              <li className="done">
                At Destination
            <p className="date-details ">19-06-2019</p>
              </li>
              <li className="done">
                Delivered
            <p className="date-details ">19-06-2019</p>
              </li>
            </ul>
          </div>
        </div >

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
export default TripCompleted
