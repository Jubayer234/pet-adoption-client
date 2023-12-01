
import { Helmet } from 'react-helmet-async';
import { Link, NavLink, Outlet } from 'react-router-dom'
import useAdmin from '../Components/Hooks/UseAdmin';

const DashBoard = () => {
  const [isAdmin] = useAdmin();

  const Sidebar = () => (
    <div className=" text-white h-screen dropdown space-y-5 pt-10 p-4">
      {
        isAdmin? <>
        <Link to="/" className="block py-2 px-4 bg-white text-black rounded-md hover:bg-gray-500">Home</Link>
      <p className='block py-2 px-4 bg-white text-black rounded-md hover:bg-gray-700'>
        <NavLink to="/dashBoard/allUser" className={({ isActive }) =>
          isActive ? " underline" : ""}>All Users</NavLink>
      </p>
      <p className='block py-2 px-4 bg-white text-black rounded-md hover:bg-gray-500'>
        <NavLink to="/dashBoard/addPet" className={({ isActive }) =>
          isActive ? " underline" : ""}>Add a Pet</NavLink>
      </p>
      <p className='block py-2 px-4 bg-white text-black rounded-md hover:bg-gray-500'>
        <NavLink to="/dashBoard/myAddedPets" className={({ isActive }) =>
          isActive ? " underline" : ""}>My Added Pets</NavLink>
      </p>
      <p className='block py-2 px-4 bg-white text-black rounded-md hover:bg-gray-700'>
        <NavLink to="/dashBoard/adoptionReq" className={({ isActive }) =>
          isActive ? " underline" : ""}>Adoption Request</NavLink>
      </p>
      <p className='block py-2 px-4 bg-white text-black rounded-md hover:bg-gray-500'>
        <NavLink to="/dashBoard/allPets" className={({ isActive }) =>
          isActive ? " underline" : ""}>All Pets</NavLink>
      </p>
      <p className='block py-2 px-4 bg-white text-black rounded-md hover:bg-gray-500'>
        <NavLink to="/dashBoard/allDonations" className={({ isActive }) =>
          isActive ? " underline " : ""}>All Donations</NavLink>
      </p>
      <p className='block py-2 px-4 bg-white text-black rounded-md hover:bg-gray-700'>
        <NavLink to="/dashBoard/donationCamp" className={({ isActive }) =>
          isActive ? " underline" : ""}>Create Donation Campaign</NavLink>
      </p>
      <p className='block py-2 px-4 bg-white text-black rounded-md hover:bg-gray-500'>
        <NavLink to="/dashBoard/myDonationCamp" className={({ isActive }) =>
          isActive ? " underline " : ""}>My Donation Campaigns</NavLink>
      </p>
      <p className='block py-2 px-4 bg-white text-black rounded-md hover:bg-gray-500'>
        <NavLink to="/dashBoard/myDonation" className={({ isActive }) =>
          isActive ? " underline" : ""}>My Donations</NavLink>
      </p>
        </> : 
        <>
        <Link to="/" className="block py-2 px-4 hover:bg-gray-700">Home</Link>
      <p className='block py-2 px-4 hover:bg-gray-700'>
        <NavLink to="/dashBoard/addPet" className={({ isActive }) =>
          isActive ? " underline text-black" : ""}>Add a Pet</NavLink>
      </p>
      <p className='block py-2 px-4 hover:bg-gray-700'>
        <NavLink to="/dashBoard/myAddedPets" className={({ isActive }) =>
          isActive ? " underline text-black" : ""}>My Added Pets</NavLink>
      </p>
      <p className='block py-2 px-4 hover:bg-gray-700'>
        <NavLink to="/dashBoard/adoptionReq" className={({ isActive }) =>
          isActive ? " underline text-black" : ""}>Adoption Request</NavLink>
      </p>
      <p className='block py-2 px-4 hover:bg-gray-700'>
        <NavLink to="/dashBoard/donationCamp" className={({ isActive }) =>
          isActive ? " underline text-black" : ""}>Create Donation Campaign</NavLink>
      </p>
      <p className='block py-2 px-4 hover:bg-gray-700'>
        <NavLink to="/dashBoard/myDonationCamp" className={({ isActive }) =>
          isActive ? " underline text-black" : ""}>My Donation Campaigns</NavLink>
      </p>
      <p className='block py-2 px-4 hover:bg-gray-700'>
        <NavLink to="/dashBoard/myDonation" className={({ isActive }) =>
          isActive ? " underline text-black" : ""}>My Donations</NavLink>
      </p>
        </>
      }
    </div>
  );

  return (
    <div className=''>
      <Helmet>
        <title>Pet Adoption | Dashboard</title>
      </Helmet>
      <div className="bg-gray-900 text-white p-4 text-center">
        {
          isAdmin? <h2>Admin DashBoard</h2> :
          <h1>User Dashboard</h1>
        }
      </div>
      <div className='flex '>
        <div className="w-64 min-h-screen bg-[#ef6e18ee]">
          <Sidebar />
        </div>
        <div className='flex-1'>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  )
}

export default DashBoard