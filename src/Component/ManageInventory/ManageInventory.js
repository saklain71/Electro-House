import React from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ItemHook from '../Hook/ItemHook';


const ManageInventory = () => {
    const navigate = useNavigate();
    const [items, setItems] = ItemHook();

    const AddItemHandler = () => {
        navigate('/additem');
    }

    const UpdateHandler = (id) => {
        console.log(id);
        navigate(`/items/${id}`);
    }

    const DeleteHandler = id => {
        const url = (`http://localhost:4000/item/${id}`)
        fetch(url, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then (data => {
            const rest = items.filter(items => items._id !== id)
            setItems(rest);
        })

    }


    return (
        <div>
            <button className='btn btn-info mt-2 mb-2' onClick={AddItemHandler}> Add Item</button>
            {
                items.map(items => <div key={items._id}>
                    <Table striped bordered hover variant="info">
                        <thead>
                            <tr>
                                <th>Img</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><img style={{ height: "50px" }} src={`${items.img}`} alt="" /></td>
                                <td>{items.name}</td>
                                <td>{items.price}</td>
                                <td>{items.instock}</td>
                                <td>
                                    <button className='btn btn-info' onClick={() => UpdateHandler(items._id)}>Update</button>
                                    <button className='btn btn-info ms-1' onClick={()=>DeleteHandler(items._id)}>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>)
            }


        </div>
    );
};

export default ManageInventory;