import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, name, price, img}) => {
  return (
    <div className='bookCard'>
        <img src={img} alt={name} />
        <h3>{name}</h3>
        <p>ID: {id}</p>
        <p>Price: {price}</p>
        <Link to={`/item/${id}`}> Details </Link>
    </div>
  )
}

export default Item