import React from 'react'
import Layout from '../layout/Layout'
import {Routes, Route} from 'react-router-dom'
import HomePage from '../pages/Index/HomePage'
import Follow from '../pages/Follow/Follow'

const PublicRoutes = () => {
  return (
    <Layout>
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/follows' element={<Follow />}/>
        </Routes>
    </Layout>
  )
}

export default PublicRoutes