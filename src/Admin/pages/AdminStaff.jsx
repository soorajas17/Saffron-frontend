import React, { useState } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import { Plus, Search, Edit2, Trash2, UserCheck } from 'lucide-react';

function AdminStaff() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeRole, setActiveRole] = useState('All');

  const staffMembers = [
    { id: "EMP-001", name: "Rahul Sharma", role: "Head Chef", status: "Active", shift: "11:00 AM - 10:00 PM", contact: "+91 98765 43210", department: "Kitchen" },
    { id: "EMP-002", name: "Priya Menon", role: "Server", status: "On Break", shift: "12:00 PM - 09:00 PM", contact: "+91 87654 32109", department: "Front of House" },
    { id: "EMP-003", name: "Arjun Rao", role: "Sous Chef", status: "Active", shift: "10:00 AM - 08:00 PM", contact: "+91 76543 21098", department: "Kitchen" },
    { id: "EMP-004", name: "Meera Nair", role: "Manager", status: "Active", shift: "09:00 AM - 07:00 PM", contact: "+91 65432 10987", department: "Management" },
  ];

  const roles = ['All', 'Head Chef', 'Server', 'Sous Chef', 'Manager'];

  const filteredStaff = staffMembers.filter(staff => 
    (activeRole === 'All' || staff.role === activeRole) &&
    (staff.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
     staff.id.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="d-flex min-vh-100">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-grow-1" style={{ marginLeft: '260px' }}>
        <div className="p-4 pt-5">
          <div className="container-fluid">

            {/* Header */}
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-5">
              <div>
                <h1 className="display-5 fw-bold">Staff Management</h1>
                <p className="text-muted fs-5">Manage your restaurant team efficiently</p>
              </div>
              <button className="btn btn-dark btn-lg px-4 d-flex align-items-center gap-2">
                <Plus size={24} /> Add New Staff
              </button>
            </div>

            {/* Search & Filters */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body">
                <div className="row g-3 align-items-center">
                  <div className="col-md-6">
                    <div className="input-group">
                      <span className="input-group-text"><Search size={20} /></span>
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Search by name, ID, or role..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex gap-2 flex-wrap">
                      {roles.map(role => (
                        <button 
                          key={role}
                          onClick={() => setActiveRole(role)}
                          className={`btn rounded-pill px-4 ${activeRole === role ? 'btn-dark' : 'btn-outline-dark'}`}
                        >
                          {role}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Shift Overview */}
            <div className="row g-4 mb-5">
              <div className="col-md-4">
                <div className="card border-0 shadow-sm bg-success bg-opacity-10 h-100">
                  <div className="card-body text-center">
                    <h3>24</h3>
                    <p className="text-muted">Active Staff</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-0 shadow-sm bg-warning bg-opacity-10 h-100">
                  <div className="card-body text-center">
                    <h3>18</h3>
                    <p className="text-muted">Required Today</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-0 shadow-sm bg-danger bg-opacity-10 h-100">
                  <div className="card-body text-center">
                    <h3>3</h3>
                    <p className="text-muted">Shortage</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Staff Table */}
            <div className="card border-0 shadow-sm">
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>STAFF</th>
                      <th>EMPLOYEE ID</th>
                      <th>ROLE</th>
                      <th>STATUS</th>
                      <th>SHIFT</th>
                      <th>CONTACT</th>
                      <th>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredStaff.map((staff) => (
                      <tr key={staff.id}>
                        <td>
                          <div className="d-flex align-items-center gap-3">
                            <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{width: '45px', height: '45px'}}>
                              {staff.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <div className="fw-semibold">{staff.name}</div>
                              <small className="text-muted">{staff.department}</small>
                            </div>
                          </div>
                        </td>
                        <td><strong>{staff.id}</strong></td>
                        <td>{staff.role}</td>
                        <td>
                          <span className={`badge ${staff.status === 'Active' ? 'bg-success' : 'bg-warning'}`}>
                            {staff.status}
                          </span>
                        </td>
                        <td>{staff.shift}</td>
                        <td>{staff.contact}</td>
                        <td>
                          <div className="d-flex gap-2">
                            <button className="btn btn-sm btn-outline-primary"><Edit2 size={16} /></button>
                            <button className="btn btn-sm btn-outline-danger"><Trash2 size={16} /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pagination */}
            <div className="d-flex justify-content-between align-items-center mt-4">
              <small className="text-muted">Showing 1 to 4 of 24 staff members</small>
              <div className="btn-group">
                <button className="btn btn-outline-dark">Previous</button>
                <button className="btn btn-dark">1</button>
                <button className="btn btn-outline-dark">2</button>
                <button className="btn btn-outline-dark">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminStaff;