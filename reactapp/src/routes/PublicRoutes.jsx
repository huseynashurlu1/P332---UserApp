import React from 'react'
import Layout from '../layout/Layout'
import {Routes, Route} from 'react-router-dom'
import HomePage from '../pages/Index/HomePage'
import Contact from '../pages/Contact/Contact'

const PublicRoutes = () => {
  return (
    <Layout>
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/contact' element={<Contact />}/>
        </Routes>
    </Layout>
  )
}

export default PublicRoutes