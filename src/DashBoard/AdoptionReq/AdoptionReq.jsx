import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
import ReqRow from './ReqRow';
import Swal from 'sweetalert2';

const AdoptionReq = () => {

    const { user } = useContext(AuthContext);
    const [request, setRequest] = useState([]);

    const url = `https://pet-adoption-server-flax.vercel.app/petRequest?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setRequest(data))
    }, [url]);

    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to')
        if (proceed) {
            fetch(`https://pet-adoption-server-flax.vercel.app/petRequest/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Rejected",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        const remaining = request.filter(request => request._id !== id)
                        setRequest(remaining);

                    }
                })
        }
    }

    const handleAccept = id => {
        fetch(`https://pet-adoption-server-flax.vercel.app/petRequest/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = request.filter(request => request._id !== id);
                    const updated = request.find(request => request._id === id);
                    updated.status = 'confirm'
                    const newReq = [updated, ...remaining];
                    setRequest(newReq);
                }
            })
    }


    return (
        <div className='ml-10 mt-10'>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Total ID :{request.length}</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Number</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                request?.map(request => <ReqRow
                                    key={request._id}
                                    request={request}
                                    handleDelete={handleDelete}
                                    handleAccept={handleAccept}
                                ></ReqRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AdoptionReq