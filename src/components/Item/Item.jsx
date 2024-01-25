import React from 'react'

const Item = ({id, name, price, img}) => {
  return (
    <div>
        <img src={img} alt={name} />
        <h3>Nombre: {name}</h3>
        <p>ID: {id}</p>
        <p>Price: {price}</p>
        <button>Details</button>
    </div>
  )
}

export default Item