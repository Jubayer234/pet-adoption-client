import React from 'react'
import CategoryCards from './CategoryCards'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle'

const Category = ({cards}) => {
    return (
        <div className='text-center pt-16'>
            <SectionTitle
        subHeading={"---Meet The Animals---"}
        heading={"Pet Category"}
        ></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 rounded-3xl mt-5 p-8 lg:p-0'>
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