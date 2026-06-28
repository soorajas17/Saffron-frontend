import React from 'react';
import { Search, Bell, Menu } from 'lucide-react';

function AdminTopbar() {
  return (
    <nav 
      className="navbar navbar-expand-lg bg-white border-bottom shadow-sm px-4 py-3 position-fixed w-100" 
      style={{ left: '260px', zIndex: 1040, top: 0 }}
    >
      <div className="container-fluid">

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler d-lg-none me-3 border-0"
          type="button"
        >
          <Menu size={28} />
        </button>

        {/* Search Bar */}
        <div className="position-relative flex-grow-1 me-4" style={{ maxWidth: '420px' }}>
          <div className="input-group">
            <span className="input-group-text bg-transparent border-end-0">
              <Search size={20} />
            </span>
            <input
              type="text"
              className="form-control border-start-0 ps-1"
              placeholder="Search orders, tables, or staff..."
            />
          </div>
        </div>

        <div className="d-flex align-items-center gap-4 ms-auto">
          {/* Notifications */}
          <button className="btn btn-link position-relative p-2">
            <Bell size={24} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">3</span>
          </button>

          {/* Divider */}
          <div className="vr" style={{ height: '28px' }}></div>

          {/* Profile */}
          <div className="d-flex align-items-center gap-3">
            <div className="text-end d-none d-md-block">
              <div className="fw-medium small">Rajiv Mehta</div>
              <small className="text-muted">Executive Admin</small>
            </div>
            <img
              src="https://picsum.photos/id/64/48/48"
              alt="Profile"
              className="rounded-circle border"
              width="42"
              height="42"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default AdminTopbar;