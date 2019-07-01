import React, { Component } from 'react'

const TripItem = (props) => {
  let { trip } = props
  return (
    <li className={trip.isDone ? 'done' : 'list'}>{trip.status}
      <p className="date-details">{trip.date}</p>
    </li>
  )
}

export default TripItem
