import React from 'react';
import { Table } from 'react-bootstrap';
import ItemHook from '../Hook/ItemHook';


const ManageInventory = () => {
    const [items, setItems] = ItemHook();
    console.log(items.length);

    const handlerDelete = id => {

    }

    return (
        <div>
            <button className='btn btn-info mt-2 mb-2'> Add Item</button>
            {
                items.map(items => <div key={items._id}>
                    <Table striped bordered hover variant="info">
                        <thead>
                            <tr>
                                <th>Img</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><img style={{ height: "50px" }} src={`${items.img}`} alt="" /></td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                
                                    <button>Update</button>
                                    <button>Delete</button>
                                
                            </tr>
                        </tbody>
                    </Table>
                </div>)
            }


        </div>
    );
};

export default ManageInventory;