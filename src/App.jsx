import { Route, Routes } from 'react-router-dom';
import './App.css';

// Customer Pages
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import Profile from './pages/Profile';
import Auth from './pages/Auth';
import BookTable from './pages/BookTable';
import MyOrders from './pages/MyOrder';
import Checkout from './components/Checkout';
import AdminDashboard from './Admin/pages/AdminDashboard';
import AdminOrders from './Admin/pages/AdminOrders';
import AdminReservations from './Admin/pages/AdminReservations';
import AdminMenu from './Admin/pages/AdminMenu';
import AdminStaff from './Admin/pages/AdminStaff';
import AdminSettings from './Admin/pages/AdminSettings';

// Admin

function App() {
  return (
    <>
      <Routes>
        {/* Customer Routes (with Header & Footer) */}
        <Route
          path="/*"
          element={
            <>
              <Header />
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Auth />} />
                <Route path="/register" element={<Auth isRegister={true} />} />
                <Route path="/booking" element={<BookTable />} />
                <Route path="/orders" element={<MyOrders />} />
                <Route path="/checkout" element={<Checkout />} />
              </Routes>
              <Footer />
            </>
          }
        />

        {/* Admin  */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-orders" element={<AdminOrders />} />
        <Route path="/admin-reservations" element={<AdminReservations />} />
        <Route path="/admin-menu" element={<AdminMenu />} />
        <Route path="/admin-staff" element={<AdminStaff />} />
        <Route path="/admin-settings" element={<AdminSettings />} />
      </Routes>
    </>
  );
}

export default App;