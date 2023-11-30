import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
import ReqRow from './ReqRow';

const AdoptionReq = () => {

    const {user} = useContext(AuthContext);
    const [request, setRequest] = useState([]);

    const url = `http://localhost:5000/petRequest?email=${user?.email}`;
    useEffect( () => {
        fetch(url)
        .then(res => res.json())
        .then(data => setRequest(data))
    },[])

  return (
    <div className='text-4xl'> Req : {request.length}
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