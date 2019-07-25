import React, { Fragment } from 'react'
import Trip from './Trip';

const TripItem = ({ trip }) => {
  return (
    <div className="list">
      <Trip status={trip.statusHistory} />
      
    </div>
  )
}


export default TripItem
