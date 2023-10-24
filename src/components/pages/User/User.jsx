import React from 'react'
import Navigation from 'components/navigation/Navigation';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const User = () => {
  const { userEmail } = useSelector((state) => state.auth)
  return (
    <div>
        <Navigation/>
      UserPage
      <p>Hello, {userEmail}</p>
    </div>
  )
}

export default User
