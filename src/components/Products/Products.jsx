import { useState, useEffect } from "react";
import { db } from "../../services/config";
import { getDocs, collection, query } from "firebase/firestore";


const Products = () => {
    const [product, setProduct] = useState([]);
    useEffect( () => {
        const ourProducts = query(collection(db, "products"));
        getDocs(ourProducts)
            .then(response => {
                setProduct(response.docs.map(doc => ({id:doc.id, ...doc.data()})))
            })
    }, [])
    return (
        <div>
            <h2>Our Products</h2>
            <div className="container">
                {
                    product.map(item => (
                        <div>
                            <img src={item.img} alt={item.name} />
                            <h3> {item.name} </h3>
                            <p> {item.price} </p>
                            <p> {item.stock} </p>
                            <button>Buy</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Products

//Firebase I 0.47