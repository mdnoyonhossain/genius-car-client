import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../../assets/images/error/error.png'

const ErrorPage = () => {
    return (
        <section className="flex items-center h-full sm:p-16  bg-white  text-gray-100">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
                <img src={error} alt="" />
                
                <Link to="/" className="px-8 py-3 font-semibold rounded  bg-[#FF3811] text-white">Back to homepage</Link>
            </div>
        </section>
    );
};

export default ErrorPage;