import React from 'react';

import { useParams } from 'react-router-dom';


const ItemsDetails = () => {
    const {id} = useParams();


    const updateHandler = (event) => {
        event.preventDefault();
        const name = event.target.name.value;     
        const instock = event.target.instock.value;   
        const price = event.target.price.value;
        const supplier = event.target.supplier.value;
        const img = event.target.img.value;
        const description = event.target.description.value;
        const data  = {name, supplier, price, instock, img, description};
        console.log(name, instock);

        const url = `http://localhost:4000/item/${id}`
        fetch(url, {
            method: 'PUT',
 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result);
                event.target.reset();
            })
    };
   
    // const nameHandle = (event) =>{
    //     setName(event.target.value);
    //     console.log(name);
    // }

    return (
        <div className='w-50 mx-auto mb-5 mt-5'>
          <h1 className='text-info'>Update Below</h1>
            <form onSubmit={updateHandler}>
                <input className='w-100 mb-2 ' type="text" name="Name" placeholder='Name'  /> <br />
                <input className='w-100 mb-2 ' type="text" name="name" placeholder='item: name'  /> <br />
                <input className='w-100 mb-2 ' type="number" name="instock"  placeholder='instock number'    /> <br />
                <input className='w-100 mb-2 ' type="number" name="price"  placeholder='price'   /> <br />
                <input className='w-100 mb-2 ' type="text" name="supplier" placeholder='supplier'  /> <br />
                <input className='w-100 mb-2 ' type="text" name="img" placeholder='img link'  /> <br />
                <textarea className='w-100 mb-2 ' type="text" name="description" placeholder='description'  cols="10" rows="10"></textarea>
                <input className='btn btn-primary' type="submit" value="Submit" />
            </form>


        </div>
    );
};

export default ItemsDetails;