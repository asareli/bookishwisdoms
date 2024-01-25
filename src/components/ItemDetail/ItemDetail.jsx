import React from 'react'

const ItemDetail = ({id, name, price, img}) => {
  return (
    <div>
        <h2>Name: {name}</h2>
        <h3>Price: {price} </h3>
        <p>ID: {id} </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias sapiente ad, quibusdam voluptatem eaque consectetur voluptatibus voluptatum necessitatibus, enim, perferendis provident. Unde veritatis nam nesciunt illo dignissimos non facilis itaque?</p>
        <img src="{img}" alt="{name}" />
    </div>
  )
}

export default ItemDetail