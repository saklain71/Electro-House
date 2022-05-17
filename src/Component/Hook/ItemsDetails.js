import { useEffect, useState } from "react";

const ItemsDetails = id =>{
    const [items, setItems] = useState({});

    useEffect(()=>{
        const url = (`http://localhost:4000/items/${id}`);
        fetch(url)
        .then(res => res.json())
        .then(data => setItems(data))

    },[id])

    return[id]
}
export default ItemsDetails;