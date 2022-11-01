import React from 'react';

const BannerItems = ({slider}) => {
    const {image, prev, next, id} = slider;
    
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carosel-image'>
                <img src={image} alt="" className="" style={{borderRadius: '14px'}} />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                <h1 className='text-6xl font-bold text-white'>
                    Affordable <br />
                    Price for Car <br />
                    Servicing
                </h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2">
                <p className='text-white'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-3/4">
                <button className='button-discover font-semibold mr-4'>Discover More</button>
                <button className='button-appoiment font-semibold'>Latest Project</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItems;