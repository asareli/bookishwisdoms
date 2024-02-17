import './CartWidget.css'

const CartWidget = () => {
    return (
    <div className='cart-container'>
        <img className='imgCart' src="/img/cart.png" alt="Cart"/>
        <strong className='cart-number'>  </strong>
    </div>
    )
}

export default CartWidget
