
import { Link} from 'react-router-dom'

const Sidebar = () => (
    <div className=" text-white h-screen fixed  p-4">
      <Link to="/add-pet" className="block py-2 px-4 hover:bg-gray-700">Add a Pet</Link>
      <Link to="/my-added-pets" className="block py-2 px-4 hover:bg-gray-700">My Added Pets</Link>
      <Link to="/adoption-request" className="block py-2 px-4 hover:bg-gray-700">Adoption Request</Link>
      <Link to="/create-donation-campaign" className="block py-2 px-4 hover:bg-gray-700">Create Donation Campaign</Link>
      <Link to="/my-donation-campaigns" className="block py-2 px-4 hover:bg-gray-700">My Donation Campaigns</Link>
      <Link to="/my-donations" className="block py-2 px-4 hover:bg-gray-700">My Donations</Link>
    </div>
  );

const DashBoard = () => {
  return (
    <div className='pt-28'>
        <div className="bg-gray-900 text-white p-4 text-center">
          <h1>User Dashboard</h1>
        </div>
        <div className="w-64 min-h-screen bg-[#ef6e18ee]">
        <Sidebar />
        </div>
    </div>
  )
}

export default DashBoard