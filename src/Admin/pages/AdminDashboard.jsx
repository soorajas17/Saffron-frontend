import React, { useState } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import AdminTopbar from '../components/AdminTopbar';
import AdminDashboardContent from '../components/AdminDashboardContent';

function AdminDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="d-flex min-vh-100 bg-light">
      {/* Desktop Sidebar */}
      <div className="d-none d-lg-block">
        <AdminSidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-grow-1" style={{ marginLeft: '260px' }}>
        <AdminTopbar />

        <AdminDashboardContent />
      </div>

      {/* Mobile Sidebar */}
      <div className={`offcanvas offcanvas-start ${isSidebarOpen ? 'show' : ''}`} style={{ width: '260px' }}>
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Admin Menu</h5>
          <button type="button" className="btn-close" onClick={() => setIsSidebarOpen(false)}></button>
        </div>
        <div className="offcanvas-body p-0">
          <AdminSidebar />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;