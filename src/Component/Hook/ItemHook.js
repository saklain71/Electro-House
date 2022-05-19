import { useEffect, useState } from "react";

const ItemHook = () =>{
    const [service , setService] = useState([]);

    useEffect(() => {
        fetch('https://fathomless-shore-64327.herokuapp.com/items')
            .then(res => res.json())
            .then(data =>
                setService(data))

    }, []);

    return [service, setService];
}

export default ItemHook;