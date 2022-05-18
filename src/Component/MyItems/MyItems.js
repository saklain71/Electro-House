import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
//import { useNavigate } from 'react-router-dom';
import axiosAdd from '../AxiosAdd';
import auth from '../firebase.init';

const MyItems = () => {
    const [Items, setItems] = useState();
    const [user] = useAuthState(auth);
   
  
    //const navigate = useNavigate();

    useEffect(() => {

        const getOrders = async() => {
            const email = user?.email;
            console.log(email);
            const url = `http://localhost:4000/items?email=${email}`;
            try {
                const { data } = await axiosAdd.get(url);
                setItems(data);
                console.log(data);
            }
            catch (error) {
                console.log(error.message);
                // if (error.response.status === 401 || error.response.status === 403) {
                //     signOut(auth);
                //     navigate('/login');
                // }
            }
        }
        getOrders();

    }, [user])

    return (
        <div className='w-50 mx-auto'>
            <h2>Your orders number ...</h2>
{/* 
            {
                Items.map(Items => <li key={Items._id}>
                    <p>{Items.email} : {Items.service}</p>
                </li>)
            } */}
        </div>
    );
};

export default MyItems;