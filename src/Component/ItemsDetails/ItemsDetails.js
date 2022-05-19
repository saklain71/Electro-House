
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "./ItemsDetails.css";

const ItemsDetails = () => {
    const { id } = useParams();
    const [items, setItems] = useState({});
    const [stock, setStock] = useState(0);
    const [reStock, setRestock] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://fathomless-shore-64327.herokuapp.com/item/${id}`)
            .then(res => res.json())
            .then(data => {
                setItems(data)
                setStock(data.instock)
            })
    }, [stock, id]);

    const deliverHandler = (e) => {
        e.preventDefault();
        let instock;
        if (stock > 0) {
            instock = parseInt(stock) - 1;
          
            alert("Do you want prduct to deliver?")
        }
        else {
            alert('No product to deliver!')
        }
        setStock(instock)
       
        const url = `https://fathomless-shore-64327.herokuapp.com/item/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                instock: instock
            }),
        })
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result);

            })
    }
    const reStockHandler = (e) => {
        e.preventDefault();
        const newStock = e.target.reStock.value;
        const reNewStock = parseInt(stock) + parseInt(newStock);
        setStock(reNewStock);
        e.target.reset();
            const url = `https://fathomless-shore-64327.herokuapp.com/item/${id}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                    {
                        instock : reNewStock
                    }
                ),
            })
                .then(response => response.json())
                .then(result => {
                    console.log('Success:', result);

                })
        
    }
    const manageHandler = () => {
        navigate('/inventory')
    }

    return (
        <div className=''>
            <div className='w-50 mx-auto mb-5 mt-5 '>
                <h1 className='text-info'>Update Below</h1>
                <hr />
                <div className='d-flex Update-items'>

                    <div>
                        <img className='w-75' src={items.img} alt="" />
                    </div>
                    <div>

                        <h2>{items.name}</h2>
                        <p><b> Price: $</b>{items.price}</p>

                        <p><b> Supplier: </b>{items.supplier}</p>

                        <p><b> Instock: </b>{items.instock} <button className='btn btn-info' onClick={deliverHandler}>Deliver</button></p>

                        <p className='text-center'> {items.description}</p>

                    </div>

                </div>
                <hr />
                <form onSubmit={reStockHandler}>
                    <p><input className='p-2' type="number" placeholder='Stock Amount' name="reStock" /> <button className='btn btn-info'  >Re stock</button> </p>
                </form>
            </div>
            <div className=' w-50 mx-auto'>
                <button className='btn btn-info' onClick={manageHandler}>Manage inventory</button>
            </div>
        </div>
    );
};

export default ItemsDetails;