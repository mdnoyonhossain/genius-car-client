import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({ order, handleDelete, handleUpdateStatus }) => {
    const { _id, serviceName, price, customer, service, phone, status } = order;
    const [orderServices, setOrderServices] = useState({});

    useEffect(() => {
        fetch(`https://genius-car-server.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderServices(data))
    }, []);



    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {
                                orderServices?.img &&
                                <img src={orderServices.img} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>
                        <div className="text-sm opacity-50">ID: {service}</div>
                    </div>
                </div>
            </td>
            <td>
                {customer}
                <br />
                <span className="badge badge-ghost badge-sm">{phone}</span>
            </td>
            <td>${price}</td>
            <th>
                <Link onClick={() => handleUpdateStatus(_id)}>
                    {
                        status ?
                            <button style={{border: '1px solid #29B170', color: '#29B170'}} className="text-white font-normal px-2 py-1 rounded">{status}</button>
                            :
                            <button className="bg-[#FF3811] text-white font-normal px-2 py-1 rounded">Pending</button>
                    }
                </Link>
            </th>
        </tr>
    );
};

export default OrderRow;