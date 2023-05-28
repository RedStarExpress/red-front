import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './utils/Layout'
import Contacts from './pages/Contacts'
import Services from './pages/Services'
import TrackCode from './pages/TrackCode'
import News from './pages/News'
import NewsDetail from './pages/NewsDetail'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout><Home /></Layout>} />
      <Route path='/track_code' element={<Layout><TrackCode /></Layout>} />
      <Route path='/news' element={<Layout><News /></Layout>} />
      <Route path='/news_detail/:id' element={<Layout><NewsDetail /></Layout>} />
      <Route path='/services' element={<Layout><Services /></Layout>} />
      <Route path='/contact_us' element={<Layout><Contacts /></Layout>} />
    </Routes>
  )
}

export default App
