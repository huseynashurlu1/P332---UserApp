import React, { useContext } from 'react'
import './follow.css'
import { UserContext } from '../../context/UserContext'
import Card from '../../components/Card/Card'

const Follow = () => {
  const context = useContext(UserContext)
  return (
    <div className='container'>
      {
        context.user.length > 0 ? context.user.map(item => {
          return (
            <Card data={item}/>
          )
        }) : <div className='alert alert-primary w-25 mx-auto mt-5 text-center'>No followings...</div>
      }
    </div>
  )
}

export default Follow