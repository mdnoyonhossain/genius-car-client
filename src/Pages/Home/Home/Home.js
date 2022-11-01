import React from 'react';
import About from '../About/About';
import Choosus from '../Choosus/Choosus';
import Info from '../Info/Info';
import Product from '../Product/Product';
import Services from '../Services/Services';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className='w-11/12 m-auto'>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Info></Info>
            <Product></Product>
            <Choosus></Choosus>
        </div>
    );
};

export default Home;