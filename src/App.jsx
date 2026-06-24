import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Profile from './pages/Profile'
import LandingPage from './pages/LandingPage'

function App() {

  return (
    <>
      <Header />
      
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      
      <Footer />
    </>
  )
}

export default App
