import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Profile from './pages/Profile'
import LandingPage from './pages/LandingPage'
import Auth from './pages/Auth'

function App() {

  return (
    <>
      <Header />
      
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Auth isRegister={true}/>}/>
      </Routes>
      
      <Footer />
    </>
  )
}

export default App
