import React from 'react'

function Details(props) {
  return (
    <div className='details'>

        <div className="account">
          <strong>Account</strong>
          <span className="red">{props.accNo}</span>
        </div>

        <div className="bankName">
          <strong>Name</strong>
          <span className="red">{props.bName}</span>
        </div>

        <div className="type">
          <strong>Type</strong>
          <span className="red">{props.type}</span>
        </div>
        
    </div>
  )
}

export default Details
