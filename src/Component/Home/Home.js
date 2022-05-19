import React, { useEffect, useState } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import HomeDelivery from '../HomeDelivery/HomeDelivery';
import Items from '../Items/Items';
import "./Home.css";

const Home = () => {
const [items , setItems] = useState([]);

useEffect(()=>{
    fetch('https://fathomless-shore-64327.herokuapp.com/items')
    .then((res) => res.json())
    .then((data) => setItems(data))
},[]);

    return (
        
        <div>
            <h1 className='text-center'><u>Inventory Items</u></h1>
           <div className='services-container'>
           {
                items.map(items => 
                <Items 
                key={items._id}
                items = {items}
                ></Items>)
            }
           </div>
           <HomeDelivery></HomeDelivery>
           <ContactForm></ContactForm>
        </div>
    );
};

export default Home;