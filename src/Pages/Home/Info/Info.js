import React from 'react';
import time from '../../../assets/icons/check.svg';
import persion from '../../../assets/icons/person.svg';
import locaton from '../../../assets/icons/deliveryt.svg';

const Info = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-black text-white my-10 p-16 rounded-lg">
            <div className="flex align-items-center">
                <div className='mr-5'>
                    <img src={time} alt="" />
                </div>
                <div>
                    <p><small>We are Open monday-friday</small></p>
                    <h3 className='text-2xl font-bold'>7:00 am - 9:00 pm</h3>
                </div>
            </div>
            <div className="flex align-items-center">
                <div className='mr-5'>
                    <img src={persion} alt="" />
                </div>
                <div>
                    <p><small>Have a question?</small></p>
                    <h3 className='text-2xl font-bold'>+2546 251 2658</h3>
                </div>
            </div>
            <div className="flex align-items-center">
                <div className='mr-5'>
                    <img src={locaton} alt="" />
                </div>
                <div>
                    <p><small>Need a repair? our address</small></p>
                    <h3 className='text-2xl font-bold'>Liza Street, New York</h3>
                </div>
            </div>
        </div>
    );
};

export default Info;