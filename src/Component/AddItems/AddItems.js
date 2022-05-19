import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../firebase.init';

const AddItems = () => {
    const [items, setItems] = useState();
    const [user] = useAuthState(auth);
  
    useEffect(()=>{

        fetch('http://localhost:4000/items')
        .then(res =>res.json())
        .then(data => setItems(data))
   },[items])

    // from react hook form
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
       const total = {...data, delivery : 0};
       console.log(total);

        const url = 'http://localhost:4000/item';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(total),
           
        })
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result);
                
            })
    };
    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-info'>Add New Item</h1>
            <form className='d-flex flex-column p-2 ' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2 p-2' placeholder='Name' name='email' value={user?.email}  type="text" {...register("email")}/>
                <input className='mb-2 p-2' placeholder='item: name' type="text" {...register("name", { required: true })} />
                <input className='mb-2  p-2' placeholder='item: instock' type="number" {...register("instock", { required: true })} />
                <input className='mb-2  p-2' placeholder='item: price' type="number" {...register("price")} />
                <input className='mb-2  p-2' placeholder='supplier name' type="text" {...register("supplier")} />
                <input className='mb-2  p-2' placeholder='photo url' type="text" {...register("img", {required: true})} />
                <textarea className='mb-2  p-2' placeholder='item : description' type="text" {...register("description")} />
                <input className='btn btn-info  p-2' type="submit" value="Add Items" />
            </form>

        </div>
    );
};

export default AddItems;