import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const Checkout = () => {
    const { _id, img, title, price } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handlePlacedOrder = event => {
        event.preventDefault();

        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const phone = form.phone.value;
        const email = user?.email || 'Not Register';
        const message = form.message.value;
        
        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            phone,
            email,
            message
        }

        fetch('https://genius-car-server.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success(`Hay, ${name} Order Successfully`);
                form.reset()
            }
        })

    }

    return (
        <section className="p-6 bg-gray text-gray-50 w-11/12 m-auto">

            <div className="hero h-60 rounded mb-16" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
                <div className="hero-content text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-semibold">Check Out</h1>
                        <h1 className="mb-5 text-2xl font-semibold text-emerald-400">{title}</h1>
                    </div>
                </div>
            </div>

            <form onSubmit={handlePlacedOrder} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                <fieldset className="rounded-md shadow-sm bg-[#F3F3F3]">
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 py-16 px-3 lg:px-28">
                        <div className="col-span-full sm:col-span-3">
                            <input type="text" name='firstName' placeholder="First Name" className="w-full focus:ring-opacity-75 focus:ring-violet-400 border-black text-gray-400 py-2 px-3 rounded" required/>
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <input type="text" name='lastName' placeholder="Last Name" className="w-full focus:ring-opacity-75 focus:ring-violet-400 border-black text-gray-400 py-2 px-3 rounded" required/>
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <input type="text" name='phone' placeholder="Your Phone" className="w-full focus:ring-opacity-75 focus:ring-violet-400 border-black text-gray-400 py-2 px-3 rounded" required/>
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <input type="email" name='email' defaultValue={user?.email} readOnly placeholder="Your Email" className="w-full focus:ring-opacity-75 focus:ring-violet-400 border-black text-gray-400 py-2 px-3 rounded" required/>
                        </div>
                        <div className="col-span-full">
                            <textarea name='message' placeholder="Your Message" className="w-full focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900 rounded py-10 px-5" required></textarea>
                        </div>
                        <div className="col-span-full">
                            <button className='w-full py-3 rounded font-semibold bg-[#FF3811]'>Order Confirm</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default Checkout;