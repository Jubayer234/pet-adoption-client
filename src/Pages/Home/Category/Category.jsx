import React from 'react'
import CategoryCards from './CategoryCards'

const Category = ({cards}) => {
    return (
        <div className='text-center pt-16'>
            <p className='text-[#ef6f18] text-lg font-bold'>
                Meet The Animals
            </p>
            <h2 className='text-5xl font-bold border-b border-black w-4/12 mx-auto pb-5 mb-6'>
                Pet Category
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 rounded-3xl mt-5'>
                {
                cards?.map(card => <CategoryCards
                key={card.id}
                card={card}
                ></CategoryCards>)
                }
            </div>
        </div>
    )
}

export default Category