import React, { useState } from 'react'
import Pets from './Pets';

const PetCards = ({ data }) => {
    return (
        <div>
            
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 rounded-3xl mt-5 p-8 lg:p-0'>
                {
                    data?.map(data => <Pets
                        key={data._id}
                        data={data}
                    ></Pets>)
                }
            </div>
        </div>
    )
}

export default PetCards