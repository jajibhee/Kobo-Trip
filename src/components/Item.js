import React from 'react'

const Accepted = ({ history }) => {
  return (
    <li className="progress-status">
      {history.status}
      <p className="date-details">{history.userId}</p>
    </li>


  )
}

export default Accepted
