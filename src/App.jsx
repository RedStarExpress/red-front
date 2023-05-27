import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './utils/Layout'
import Contacts from './pages/Contacts'
import Services from './pages/Services'
import TrackCode from './pages/TrackCode'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout><Home /></Layout>} />
      <Route path='/track_code' element={<Layout><TrackCode /></Layout>} />
      <Route path='/services' element={<Layout><Services /></Layout>} />
      <Route path='/contact_us' element={<Layout><Contacts /></Layout>} />
    </Routes>
  )
}

export default App
