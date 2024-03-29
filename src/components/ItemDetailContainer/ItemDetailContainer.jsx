import { useState, useEffect } from "react";
import { getOneProduct } from "../../asyncronicmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const {idItem} = useParams();
    useEffect( () => {
        getOneProduct(idItem)
            .then(res => setProduct(res))
    }, [idItem])
  return (
    <div>
      <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer