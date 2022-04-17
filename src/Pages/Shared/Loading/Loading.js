import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='d-flex align-aitems-center justify-content-center w-100 py-5'>
            <Spinner animation='border' variant='info'></Spinner>
        </div>
    );
};

export default Loading;