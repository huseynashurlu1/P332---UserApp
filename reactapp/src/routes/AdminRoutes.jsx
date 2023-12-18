import React from 'react'
import AdminLayout from '../layout/AdminLayout'
import { Route, Routes } from 'react-router-dom'
import AdminIndex from '../admin/AdminIndex/AdminIndex'
import Message from '../admin/Message/Message'

const AdminRoutes = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path='/manage/index' element={<AdminIndex />}/>
        <Route path='/manage/messages' element={<Message />}/>
      </Routes>
    </AdminLayout>
  )
}

export default AdminRoutes