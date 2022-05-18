import { useEffect, useState } from "react";

const ItemHook = () =>{
    const [service , setService] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/items')
            .then(res => res.json())
            .then(data =>
                setService(data))

    }, []);

    return [service, setService];
}

export default ItemHook;