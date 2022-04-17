import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
    return (
        <div>
            <div className='container'>
            <h1 className='text-info text-center mt-5'> Services</h1>
            <div className="row g-3 my-2">
            {
                services.map(service => <Service key={service.id}
                    service={service}>
                </Service>)
            }
            </div>
        </div>
        </div>
    );
};

export default Services;