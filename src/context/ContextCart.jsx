import { useState, createContext } from "react";

export const CartContext = createContext({
    cart: [],
    total: 0,
    totalAmount: 0
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const addToCart = (item, amount) => {
        const existentProduct = cart.find(prod => prod.item.id === item.id);
        if(!existentProduct) {
            setCart(prev => [...prev, {item, amount}]);
            setTotalAmount(prev => prev + amount);
            setTotal(prev => prev + (item.price * amount));
        } else {
            const updatedCart = cart.map(prod => {
                if(prod.item.id === item.id) {
                    return {...prod, amount: prod.amount + amount};
                } else {
                    return prod;
                }
            })
            setCart(updatedCart);
            setTotalAmount(prev => prev + amount);
            setTotal(prev => prev + (item.price * amount));
        }
    }
    const deleteProduct = (id) => {
        const deletedProduct = cart.find(prod => prod.item.id === id);
        const updatedCart = cart.filter(prod => prod.item.id !== id);
        setCart(updatedCart);
        setTotalAmount(prev => prev - deletedProduct.amount);
        setTotal(prev => prev - (deletedProduct.item.precio * deletedProduct.amount));
    }
    const emptyCart = () => {
        setCart([]);
        setTotal(0);
        setTotalAmount(0);
    }
    return (
        <CartContext.Provider value={{cart, total, totalAmount, addToCart, deleteProduct, emptyCart}}> {children} </CartContext.Provider>
    )
}