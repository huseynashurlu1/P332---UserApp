import React, { useContext, useEffect } from 'react'
import './home.css'
import { useState } from 'react'
import axios from 'axios'
import Card from '../../components/Card/Card'
import { UserContext } from '../../context/UserContext'

const HomePage = () => {
  const [users, setUsers] = useState([])
  const context = useContext(UserContext)
  const inputValue = context.value

  useEffect(() => {
    const getUsers = async () => {
      await axios.get('https://randomuser.me/api/?results=50')
      .then(response => setUsers(response.data.results))
      .catch(error => console.log(error))
    }

    getUsers()
  }, [])

  const filteredUsers = users && users.filter(item => item.name.first.trim().toLowerCase().includes(inputValue.trim().toLowerCase()))

  if(filteredUsers.length === 0) {
    return  <div className='alert alert-primary w-25 mx-auto mt-5 text-center'>User not found...</div>
  }
  return (
    <div className='container py-5'>
        {
          filteredUsers && filteredUsers.map(user => {
            return(
              <Card data={user} key={user.login.uuid}/>
            )
          })
        }
    </div>
  )
}

export default HomePage