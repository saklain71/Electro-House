import React from 'react';
import { useNavigate } from 'react-router-dom';

const Items = ({ items }) => {
    const navigate = useNavigate();
    const { id, name, price, supplier, description, img } = items;
const handlerDetails = id =>{
navigate('/')
}
    return (
        <div>
            <div className='servicing-container mb-5'>
                <img  className='w-25' src={img} alt="" />
                <h2>{name}</h2>
                <p><b> Price: $</b>{price}</p>
                <p><b> Supplier: </b>{supplier}</p>
                <p className='text-center'> {description}</p>
                <button onClick={() => handlerDetails(id)} className='btn bg-info mx-auto d-block'>Stock Update</button>

            </div>
        </div>
    );
};

export default Items;