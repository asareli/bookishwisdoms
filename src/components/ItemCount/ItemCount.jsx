import { useState } from "react";

const ItemCount = ({initial, stock, functionAdd}) => {
    const [counter, setCounter] = useState(1);

    const increase = () => {
        if(counter < stock) {
            setCounter(counter + 1);
        }
    }

    const decrease = () => {
        if(counter > initial) {
            setCounter(counter - 1);
        }
    }

    return (
        <>
        <div>
            <button onClick={decrease}> - </button>
            <p> {counter} </p>
            <button onClick={increase}> + </button>
        </div>
            <button onClick={() => functionAdd(counter)}>Add to Cart</button>
        </>
    )
}

export default ItemCount