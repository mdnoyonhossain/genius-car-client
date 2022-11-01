import React from 'react';
import {ArrowRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
    const { img, price, title } = service;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl services-img">
            <figure><img src={img} className="p-5" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-end">
                    <p className='text-[#FF3811] font-bold'>Price: ${price}</p>
                    <Link><ArrowRightIcon className="h-6 w-6 text-[#FF3811]" blue-500></ArrowRightIcon></Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;