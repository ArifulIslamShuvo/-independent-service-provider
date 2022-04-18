import React from 'react';
import Shuvo from '../../../imagea/shuvo.png'

const Checkout = () => {
    return (
        <div>
            <h2 className='text-center mt-3'>Welcome to checkout page</h2>
            <div style={{ borderRadius: '20px' }} className='bg-success container mx-auto d-block m-5'>
            <div>
                <img style={{ height: '300px', width:'310px' }} className='mx-auto d-block p-2' src={Shuvo} alt="" />
            </div>
            <div className='p-4'>
                <h5 className='text-white fs-5 text-center'>Hello, I'm Shuvo, intimate wedding photographer based in the Barisal Area. I capture honest, authentic, and unscripted love stories for couples worldwide.</h5>
            </div>
        </div>
        </div>
    );
};

export default Checkout;

