import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const { userId } = useParams()
  return (
    <div className='p-4 bg-gray-400 rounded-lg text-white text-2xl'>User : {userId} </div>
  )
}

export default User