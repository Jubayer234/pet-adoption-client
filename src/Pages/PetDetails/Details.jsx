import React, { useEffect, useState } from 'react'
import PetDetails from './PetDetails';
import { useLoaderData, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Details = () => {
    const [card, setCard] = useState({});
    const { id } = useParams();
    const cards = useLoaderData()

    useEffect(() => {
        const cardDetail = cards?.find(card => card.id == id)
        setCard(cardDetail)
    }, [id, cards])
    return (
        <div className='pt-40'>
            <Helmet>
        <title>Pet Adoption | Pet Details</title>
        </Helmet>
            <div>
                <PetDetails
                    card={card}></PetDetails>
            </div>
        </div>
    )
}
export default Details