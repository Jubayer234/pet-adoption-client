
import { Helmet } from 'react-helmet-async';
import { Link, NavLink, Outlet } from 'react-router-dom'

const Sidebar = () => (
  <div className=" text-white h-screen dropdown  p-4">
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
  </div>
);

const DashBoard = () => {
  return (
    <div className=''>
      <Helmet>
        <title>Pet Adoption | Dashboard</title>
      </Helmet>
      <div className="bg-gray-900 text-white p-4 text-center">
        <h1>User Dashboard</h1>
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