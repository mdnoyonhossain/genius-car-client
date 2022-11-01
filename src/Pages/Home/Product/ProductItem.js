import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid'

const ProductItem = ({ product }) => {
    const { title, price, img } = product;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <div className='flex'>
                    <StarIcon className="h-6 w-6 text-orange-600" blue-500></StarIcon>
                    <StarIcon className="h-6 w-6 text-orange-600" blue-500></StarIcon>
                    <StarIcon className="h-6 w-6 text-orange-600" blue-500></StarIcon>
                    <StarIcon className="h-6 w-6 text-orange-600" blue-500></StarIcon>
                    <StarIcon className="h-6 w-6 text-orange-600" blue-500></StarIcon>
                </div>
                <h2 className="card-title">{title}</h2>
                <p className='text-[#FF3811] font-bold'>Price: ${price}</p>
            </div>
        </div>
    );
};

export default ProductItem;