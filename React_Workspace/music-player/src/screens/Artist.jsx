import React from 'react'
import Image from './Image'
import { NavLink } from 'react-router-dom'

function Artist(props) {
    const {id, name, images, genres, followers} = props
  return (
    <div className='col-md-4 col-lg-4 col-sm-6 mt-3'>
      <div className="card">
        <Image data={images?images[0]:false} />
        <div className="card-body">
            <h5 className="text-center text-success">{name}</h5>
        </div>
        <div className="card-footer">
            <NavLink to={`track/${id}`} className="btn btn-success">Tracks</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Artist

