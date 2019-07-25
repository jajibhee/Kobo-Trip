import React from 'react'
import TripItem from './TripItem';

const TripList = ({ trips }) => {
  return (
    <div className="container">
      {trips.map(trip =>
        <TripItem trip={trip} />)}

    </div>
  )
}

export default TripList;
