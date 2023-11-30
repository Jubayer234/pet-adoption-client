import React from 'react'

const ReqRow = ({ request, handleDelete, handleAccept }) => {
    const { _id, name, email, number, address, status } = request
    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <th>{name}</th>
            <th>{email}</th>
            <th>{number}</th>
            <th>{address}</th>
            <th>
                {
                    status === 'confirm' ? <span > Accepted </span> :
                        <button onClick={() => handleAccept(_id)} className="btn bg-orange-500 text-white">Accept</button>}
            </th>

        </tr>

    )
}

export default ReqRow