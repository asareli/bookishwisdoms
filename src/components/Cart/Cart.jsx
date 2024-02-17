import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { ContextCart } from "../../context/ContextCart";
import { useContext } from "react";

const Cart = () => {
    const {cart, emptyCart, total, totalAmount} = useContext(ContextCart);
    if(totalAmount === 0) {
        return(
            <>
                <h2>There are no products in the shopping cart</h2>
                <Link to="/">See Products</Link>
            </>
        )
    }
    return (
        <div>
            {
                cart.map(prod => <CartItem key={prod.id} {...prod}/>)
            }
            <h3>Total:$ {total} </h3>
            <button onClick={()=> emptyCart()}> Empty Cart </button>
            <Link to="/checkout"> Finish Shopping </Link>
        </div>
    )
}

export default Cart