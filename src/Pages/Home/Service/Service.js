import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {id, name, img, description, price} = service;

    const navigate = useNavigate();
    return (
        <div className='border-2 border-start col-12 col-lg-4'>
            <img className='w-100 rounded-3 p-3' src={img} alt="" />
            <div className='p-3'>
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <p><small>{description}</small></p>
            </div>
            <button onClick={() => navigate("/Checkout")} className='btn btn-info mx-auto d-block w-50 '>Checkout</button>
        </div>
    );
};

export default Service;