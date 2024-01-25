import React from 'react'

const ItemDetail = ({id, name, price, img}) => {
  return (
    <div>
        <h2>Name: {name}</h2>
        <h3>Price: {price} </h3>
        <p>ID: {id} </p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi inventore magni cum accusantium eius. Soluta quas ratione veniam cumque odit odio impedit delectus sint! Et minus placeat eligendi explicabo iure.</p>
        <img src="{img}" alt="{name}" />
    </div>
  )
}

export default ItemDetail