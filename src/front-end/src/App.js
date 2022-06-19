import React from 'react'
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Explore from './pages/Explore'
import ForegetPassword from './pages/ForgeotPassword'
import SignIN from './pages/SignIn'
import SignUp from './pages/SignUp'
import Offers from './pages/Offers'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/sign-in" element={<SignIN />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forget-password" element={<ForegetPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/offers" element={<Offers />} />
        </Routes>
        <Navbar />
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
