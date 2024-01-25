import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getProducts } from "../../asyncronicmock";

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([]);
  useEffect( ()=> {
    getProducts()
      .then(response => setProducts(response))
  }, [])
  return (
    <div>
      <h2>{greeting}</h2>
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer