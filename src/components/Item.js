import React from 'react'

const Accepted = ({ history }) => {
  return (
    <li>
      {history.status}
      <p className="date-details">{history.userId}</p>
    </li>


  )
}

export default Accepted
