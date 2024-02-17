import React from 'react'

const CartItem = ({item, amount}) => {
    return (
        <div>
            <h4>{item.name}</h4>
            <p>Amount: {amount}</p>
            <p>Price: {price}</p>
        </div>
    )
}

export default CartItem