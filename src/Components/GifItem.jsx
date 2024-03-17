import React from 'react'

export const GifItem = ({id, img, url}) => {
  return (
    <div className='card'>
    <img src={url} alt={img} />
    <p>{img}</p>
    </div>
  )
}
