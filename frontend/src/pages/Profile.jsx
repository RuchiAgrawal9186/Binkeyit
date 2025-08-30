import { IconUserCircle } from '@tabler/icons-react';
import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
    const user = useSelector((state)=> state.user)
  return (
    <div>
      <div className="w-20 h-20 bg-red-500 flex items-center rounded-full overflow-hidden drop-shadow-sm">
        {user.avatar ? (
          <img
            src={user.avatar}
            alt={user.name}
            className="w-full h-full"
          ></img>
        ) : (
          <IconUserCircle stroke={2} width="80" height="80" />
        )}
          </div>
          <button className='text-sm min-w-20 border border-blue-300 hover:bg-blue-400 px-3 py-1 rounded-full mt-3 cursor-pointer'>Edit</button>
    </div>
  );
}

export default Profile
