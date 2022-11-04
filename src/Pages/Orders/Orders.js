import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/UserContext';
import OrderRow from './OrderRow';
import orderImg from '../../assets/images/banner/1.jpg'

const Orders = () => {
    const { user, logOut } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://genius-car-server.vercel.app/orders/?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius-token')}}`
            }
        })
            .then(res => {
                if(res.status === 401 || res.status === 403){
                    logOut()
                }
                res.json()
            })
            .then(data => {
                console.log('inside', data)
                // setOrders(data)
            })
    }, [user?.email]);

    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure Delete Orders');
        if (proceed) {
            fetch(`https://genius-car-server.vercel.app/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remining = orders.filter(odr => odr._id !== id);
                        setOrders(remining)
                    }
                    console.log(data);
                })
        }
    }

    const handleUpdateStatus = id => {
        fetch(`https://genius-car-server.vercel.app/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const remining = orders.filter(odr => odr._id !== id);
                    const approving = orders.find(odr => odr._id === id);
                    approving.status = 'Approved';

                    const newOrders = [approving, ...remining];
                    setOrders(newOrders);
                }
            })
    }

    return (
        <div className='w-10/12 m-auto'>

            <div className="hero h-60 rounded mb-16" style={{ backgroundImage: `url(${orderImg})` }}>
                <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
                <div className="hero-content text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-semibold">Order Details</h1>
                        <h1 className="mb-5 text-4xl font-semibold">Items Order: {orders.length}</h1>
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>

                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrderRow key={order._id} order={order} handleDelete={handleDelete} handleUpdateStatus={handleUpdateStatus}></OrderRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Orders;