import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero my-22 ">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img src={person} alt="" className="w-4/5 h-full max-w-sm rounded-lg shadow-2xl" />
                    <img src={parts} alt="" className=" absolute right-5 top-1/2 border-8 w-3/5 max-w-sm rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <p className='font-bold text-[#FF3811]'>About Us</p>
                    <h1 className="text-4xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="py-3 text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="mb-4 text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="button-discover">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;