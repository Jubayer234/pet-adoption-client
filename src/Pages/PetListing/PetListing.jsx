import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PetCards from './PetCards';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';

const PetListing = () => {
  useEffect(() => {
    fetch('https://pet-adoption-server-flax.vercel.app/pet')
    .then(res => res.json())
    .then(data => {
      setData(data);
      setFilterData(data)
    })
    .catch(err => console.log(err));
  },[])
  const [data,setData] = useState([]);
  const [filterData,setFilterData] = useState([]);
  const handleSearch = (value) => {
    const res = filterData.filter(f => f.name.toLowerCase().includes(value))
    setData(res);
    if(value === data){
      setData();
    }
  }

  return (
    <div className='pt-28'>
      <Helmet>
        <title>Pet Adoption | Pet Listing</title>
      </Helmet>
      <SectionTitle subHeading={'---Meet The Animals---'} heading={'All The Pets'}></SectionTitle>
      <div>
        <h4 className='label-text text-xl font-semibold text-center mb-2'>Search Here...</h4>
        <form onChange={e => handleSearch(e.target.value)} className='items-center flex mb-10 justify-center'>
          <input type='text' placeholder='Search Pets' name='search' className='input input-bordered' required />
        </form>
      </div>
      <div>
        <PetCards data={data}></PetCards>
      </div>
    </div>
  );
};

export default PetListing;