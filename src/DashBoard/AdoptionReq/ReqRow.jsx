import React from 'react'

const ReqRow = ({request}) => {
    const {_id, name, email , number , address} = request

  return (
    
        
      <tr>
        <th>{_id}</th>
        <th>{name}</th>
        <td>{email}</td>
        <td>{number}</td>
        <td>{address}</td>
      </tr>
    
  )
}

export default ReqRow