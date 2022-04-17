import React from 'react';

const Service = ({service}) => {
    const {id, name, img, description, price} = service;
    return (
        <div className='border-2 border-start col-12 col-lg-4'>
            <img className='w-100 rounded-3 p-3' src={img} alt="" />
            <div className='p-3'>
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <p><small>{description}</small></p>
            </div>
        </div>
    );
};

export default Service;