import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { House, ShoppingCart, Calendar, UtensilsCrossed, Users, Settings, LogOut } from 'lucide-react';

function AdminSidebar() {
  const location = useLocation();
  
  const navLinks = [
    { name: 'Dashboard', path: '/admin-dashboard', icon: House },
    { name: 'Orders', path: '/admin-orders', icon: ShoppingCart },
    { name: 'Reservations', path: '/admin-reservations', icon: Calendar },
    { name: 'Menu', path: '/admin-menu', icon: UtensilsCrossed },
    { name: 'Staff', path: '/admin-staff', icon: Users },
    { name: 'Settings', path: '/admin-settings', icon: Settings },
  ];

  return (
    <div className="d-flex flex-column bg-dark text-white vh-100 position-fixed" style={{ width: '260px', zIndex: 1050 }}>
      {/* Brand */}
      <div className="p-4 border-bottom border-secondary">
        <div className="d-flex align-items-center gap-3">
          <div className="bg-warning text-dark rounded-3 p-2 d-flex align-items-center justify-content-center" style={{ width: '42px', height: '42px' }}>
            <span className="fw-bold fs-4">S</span>
          </div>
          <div>
            <h4 className="mb-0 text-warning fw-bold">Saffron & Spice</h4>
            <small className="text-light">ADMIN CONSOLE</small>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-grow-1 p-3">
        <ul className="nav flex-column gap-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;
            
            return (
              <li key={link.name} className="nav-item">
                <Link
                  to={link.path}
                  className={`nav-link d-flex align-items-center gap-3 px-3 py-3 rounded-3 text-white text-decoration-none ${isActive ? 'bg-warning text-dark fw-semibold' : 'hover-bg-secondary'}`}
                >
                  <Icon size={22} />
                  <span>{link.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* User Profile */}
      <div className="p-4 border-top border-secondary mt-auto">
        <div className="d-flex align-items-center gap-3 p-3 bg-secondary rounded-3">
          <img
            src="https://picsum.photos/id/64/80/80"
            alt="Admin"
            className="rounded-circle"
            width="48"
            height="48"
          />
          <div className="flex-grow-1">
            <div className="fw-semibold">Rajiv Mehta</div>
            <small className="text-warning">EXECUTIVE ADMIN</small>
          </div>
          <button className="btn btn-link text-white p-0">
            <LogOut size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminSidebar;