
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const MyItems = () => {
    const [Items, setItems] = useState();
    const [user] = useAuthState(auth);
   
  
    //const navigate = useNavigate();

    useEffect(() => {

        const getOrders = () => {
            const email = user?.email;
            console.log(email);
            const url = `https://fathomless-shore-64327.herokuapp.com/myitem/${email}`;
            fetch(url)
            .then(res => res.json())
            .then(data =>{
                setItems(data)
                console.log(data)
            })
        }
        getOrders();

    }, [user])

    return (
        <div className='w-50 mx-auto'>
            <h2 className='p-5'>Your Items Number : {Items?.length}</h2>
            
        </div>
    );
};

export default MyItems;