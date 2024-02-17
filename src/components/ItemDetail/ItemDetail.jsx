import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './ItemDetail.css'
import { CartContext } from '../../context/ContextCart';
import { useContext } from 'react'; 

const ItemDetail = ({id, name, stock, price, img}) => {
  const [addAmount, setAddAmount] = useState(0);
  const {addToCart} = useContext(CartContext);
  const manageAmount = (amount) => {
    setAddAmount(amount);
    const item = {id, name, price};
    addToCart(item, amount);
  }
  return (
    <div className='itemContainer'>
        <h2>{name}</h2>
        <h3>Price: {price} </h3>
        <p>ID: {id} </p>
        <p>Stock: {stock} </p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi inventore magni cum accusantium eius. Soluta quas ratione veniam cumque odit odio impedit delectus sint! Et minus placeat eligendi explicabo iure.</p>
        <img src={img} alt={name} />
        {
          addAmount > 0 ? (<Link to="/cart"> Finish Shopping</Link>) : (<ItemCount initial = {1} stock = {stock} functionAdd = {manageAmount} />)
        }
    </div>
  )
}

export default ItemDetail