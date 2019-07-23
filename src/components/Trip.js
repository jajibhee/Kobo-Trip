import React, { Fragment } from 'react'
import Item from './Item';

const Trip = ({ status }) => {
  return (
    <ul className="progress" >

      {status.map(item =>
        <Item history={item} />)}
    </ul>

  )
}

export default Trip
