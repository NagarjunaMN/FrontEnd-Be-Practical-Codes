import React from 'react'
import Bank from './Bank'
import Address from './Address'

 function UserCard(props) {
  return (
    <div className='userCard'>
            <div className='name'>{props.name}</div>
            <div className='email'>
                <span className="red">@</span>
                {props.email}
            </div>
            <div className='age'>{props.age} years</div>

      <div className="content">
        <div className="personal">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="info">
            <h4>Address</h4>
            <Address addr = {props.address} />
            <details>
                <summary>Bank Details</summary>
                <Bank details={props.bank} />   
            </details>
        </div>
      </div>
    </div>
  )
}

export default UserCard




