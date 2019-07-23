import React, { Fragment } from 'react'
import Trip from './Trip';

const TripItem = ({ trip }) => {
  return (
    <Fragment>
      <Trip status={trip.statusHistory} />


    </Fragment>
  )
}


export default TripItem
