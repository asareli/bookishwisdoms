import { useState, useEffect } from "react";
import { getOneProduct } from "../../asyncronicmock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    useEffect( () => {
        getOneProduct(6)
            .then(res => setProduct(res))
    }, [])
  return (
    <div>
      <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer