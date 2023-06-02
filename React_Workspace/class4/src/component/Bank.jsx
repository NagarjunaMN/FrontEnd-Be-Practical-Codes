import React, { Component } from 'react'

class Bank extends Component {
    constructor(props) {
      super(props)
    }
    
    render() {
        const {cardNumber,cardType,currency,cardExpire} = this.props.info
        return (
            <div className='col-md-12 mt-3 mb-3'>
                <details>
                    <summary>Bank</summary>
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <strong>Card Number</strong>
                                    <span className='float-end text-secondary'> {cardNumber} </span>
                                </li>
                                <li className="list-group-item">
                                    <strong>Card Type</strong>
                                    <span className='float-end text-secondary'> {cardType} </span>
                                </li>
                                <li className="list-group-item">
                                    <strong>Card Expire</strong>
                                    <span className='float-end text-secondary'> {cardExpire} </span>
                                </li>
                                <li className="list-group-item">
                                    <strong>Currency</strong>
                                    <span className='float-end text-secondary'> {currency} </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </details>
            </div>
        )
    }
}

export default Bank