import React from 'react';
import time from '../../../assets/icons/check.svg';
import check from '../../../assets/icons/check.svg';
import delivery from '../../../assets/icons/deliveryt.svg';
import group1 from '../../../assets/icons/group.svg';
import wrench from '../../../assets/icons/Wrench.svg';


const Choosus = () => {
    return (
        <div>
            <div className='text-center mb-5 '>
                <p className='text-[#FF3811] font-bold'>Core Features</p>
                <h3 className='text-3xl font-bold mb-2'>Why Choose Us</h3>
                <p className='text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3 my-8 justify-items-center">
                <div className='border rounded-lg p-4'>
                    <img src={wrench} alt="" />
                    <p>Expert Team</p>
                </div>
                <div className='border rounded-lg p-4'>
                    <img src={delivery} alt="" />
                    <p>Time</p>
                </div>
                <div className='border rounded-lg p-4'>
                    <img src={check} alt="" />
                    <p>Expert Team</p>
                </div>
                <div className='border rounded-lg p-4'>
                    <img src={group1} alt="" />
                    <p>Expert Team</p>
                </div>
                <div className='border rounded-lg p-4'>
                    <img src={time} alt="" />
                    <p>Expert Team</p>
                </div>
                <div className='border rounded-lg p-4'>
                    <img src={wrench} alt="" />
                    <p>Expert Team</p>
                </div>
            </div>
        </div>
    );
};

export default Choosus;