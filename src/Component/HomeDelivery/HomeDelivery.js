import React from 'react';

const HomeDelivery = () => {
    return (
        <div>
            <div className='d-flex m-2'>
            <div>
                <img className='img-fluid w-75' src="https://media.istockphoto.com/photos/asian-man-hand-accepting-a-delivery-boxes-from-professional-at-home-picture-id1093541316?k=20m=1093541316s=612x612w=0h=ACEbeV4HhUra9ds863rWo5J01WO6EvuKVl6X2u2ptR8=" alt="" />
            </div>
            <div className='items-center float-start'>
                <h1>Delivery Facilities</h1>
                <p className='text-start"'>We Provide Transportation facilities. We believe to give more extra facilities for our clients and customer also. Our every customer is a most valuable product. we make sure every product has safely arrived in your hand properly.</p>
                <button className='btn btn-info'>Know More</button>
            </div>
        </div>
        <div className='d-flex m-2'>
            <div>
                <img className='img-fluid w-75' src="https://media.istockphoto.com/photos/lorry-on-motorway-in-motion-picture-id1198082588?k=20m=1198082588s=612x612w=0h=8b3Aoq2LCjXXejQZsEQavWX_MyBxQm2DYOpcADDaYCM=" alt="" />
               
            </div>
            <div className='items-center'>
                <h1>Refund Facilities</h1>
                <p>We are giving all kinds of delivery benifits here. Most impornatntly there is a big issu to refund products for many reasons of users. We try to give our best support to our clients with refund policy.</p>
                <button className='btn btn-info'>Know More</button>
            </div>
        </div>
        </div>
    );
};

export default HomeDelivery;