import React from 'react';
import { useNavigate } from 'react-router-dom';

const Items = ({ items }) => {
    const navigate = useNavigate();
    const {name, price, supplier, description, img , instock} = items;
    const handlerDetails = id => {
        navigate(`/items/${id}`);
    }
    return (
        <div>
            <div className='servicing-container mb-5 m-2'>
                <img className='w-50' src={img} alt="" />
                <h2>{name}</h2>
                <p><b> Price: $</b>{price}</p>
                <p><b> Supplier: </b>{supplier}</p>
                <p><b> Instock: </b>{instock}</p>
                <p> {description}</p>
                <button onClick={() => handlerDetails(items._id)} className='btn bg-info mx-auto d-block'>Stock Update</button>

            </div>
        </div>
    );
};

export default Items;