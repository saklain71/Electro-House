import React, { useEffect, useState } from 'react';
import HomeDelivery from '../HomeDelivery/HomeDelivery';
import Items from '../Items/Items';
import "./Home.css";

const Home = () => {
const [items , setItems] = useState([]);

useEffect(()=>{
    fetch('data.json')
    .then((res) => res.json())
    .then((data) => setItems(data))
},[]);

    return (
        
        <div>
            <h1><u>Inventory Items</u></h1>
           <div className='services-container'>
           {
                items.map(items => 
                <Items 
                key={items.id}
                items = {items}
                ></Items>)
            }
           </div>
           <HomeDelivery></HomeDelivery>
        </div>
    );
};

export default Home;