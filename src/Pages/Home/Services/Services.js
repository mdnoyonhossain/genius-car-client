import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='my-16'>
            <div className='text-center mb-5 '>
                <p className='text-[#FF3811] font-bold'>Service</p>
                <h3 className='text-3xl font-bold mb-2'>Our Service Area</h3>
                <p className='text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> ot the words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                }
            </div>
            <div className='text-center my-6'>
                <button className='button-appoiment font-semibold'>More Services</button>
            </div>
        </div>
    );
};

export default Services;