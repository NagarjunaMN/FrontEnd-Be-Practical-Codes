import React from 'react'
const noImage = `https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png`

function Image(props) {
  return (
    <img src={props.data?props.data.url:noImage} className='card-img-top' height={400} />
  )
}

export default Image
