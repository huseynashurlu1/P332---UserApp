import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'
import { CiHome, CiMail  } from "react-icons/ci";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <ul>
        <li>
          <CiHome />
          <Link to='/manage/index'>Ana səhifə</Link>
        </li>
        <li>
          <CiMail />
          <Link to='/manage/messages'>Mesajlar</Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar