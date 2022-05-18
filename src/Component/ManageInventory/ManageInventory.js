import React from 'react';
import ItemHook from '../Hook/ItemHook';


const ManageInventory = () => {
    const [ items, setItems] = ItemHook();
    console.log(items.length);

    const handlerDelete = id =>{

    }

    return (
        <div>
            <h1>Manage Item</h1>
            {items.length}
           
        </div>
    );
};

export default ManageInventory;