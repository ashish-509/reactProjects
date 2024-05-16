import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {

  const {user} = useContext(UserContext)

  if (!user) return <h5> Please login. </h5>

  return <div> Welcome {user.username} </div>
  
}

export default Profile