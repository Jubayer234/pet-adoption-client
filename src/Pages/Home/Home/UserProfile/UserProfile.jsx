import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const dropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

  return (
    <div className='relative inline-block'>
      <img className='w-[70px] h-[70px] rounded-lg'
        src={user?.photoURL}
        alt="Profile Picture"
        onClick={dropdown}
      />
      {isDropdownVisible && (
        <div className='block absolute bg-gray-50 shadow-md p-3 -ml-10 rounded-md'>
            <p className='text-center font-bold text-lg text-[#461b96]  border-b border-black mb-2'>{user?.displayName}</p>
          <Link to={'/dashboard'}><button className='btn  ml-3 bg-[#b08cf4] font-semibold text-white'>DashBoard </button></Link>
          <div className='mb-4'>
          {
                        user ?
                        
                            <>
                            <button onClick={handleLogOut} className='btn  ml-3 bg-[#fc77ae] font-semibold text-white'>LogOut </button>
                            </>
                            : 
                            <>
                            <Link to={'/login'}>
                                <button className='btn ml-3 border bg-[#30373D] font-semibold text-white'>Login</button>
                            </Link>
                            </>

                    }
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
