import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('https://genius-car-server.vercel.app/services')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div className='my-16'>
            <div className='text-center mb-5 '>
                <p className='text-[#FF3811] font-bold'>Popular Products</p>
                <h3 className='text-3xl font-bold mb-2'>Browse Our Products</h3>
                <p className='text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    products.map(product => <ProductItem key={product._id} product={product}></ProductItem>)
                }
            </div>
            <div className='text-center my-6'>
                <button className='button-appoiment font-semibold'>More Products</button>
            </div>
        </div>
    );
};

export default Product;