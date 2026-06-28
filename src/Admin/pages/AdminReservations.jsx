import React, { useState } from 'react';
import AdminSidebar from '../components/AdminSidebar'
import { Plus, CheckCircle, XCircle, Users, Clock } from 'lucide-react';

function AdminReservations() {
  const [viewMode, setViewMode] = useState('list'); // list or calendar

  const reservations = [
    {
      id: 1,
      time: "19:30",
      name: "Ananya Singh",
      guests: 4,
      table: "Table #12",
      status: "Confirmed",
      note: "Celebrating 10th anniversary…"
    },
    {
      id: 2,
      time: "20:15",
      name: "Vikram Mehta",
      guests: 2,
      table: "Assign Table",
      status: "Pending",
      note: "No special requests"
    },
    {
      id: 3,
      time: "18:45",
      name: "Priya Sharma",
      guests: 6,
      table: "Table #04",
      status: "Arrived",
      note: "High chair requested"
    }
  ];

  const tables = [
    { number: "01", capacity: 4, status: "Available" },
    { number: "02", capacity: 2, status: "Available" },
    { number: "03", capacity: 6, status: "Occupied" },
    { number: "04", capacity: 4, status: "Maintenance" },
  ];

  return (
    <div className="d-flex min-vh-100">
      {/* Left Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-grow-1" style={{ marginLeft: '260px' }}>
        <div className="p-4 pt-5">
          <div className="container-fluid">

            {/* Header */}
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-5">
              <div>
                <h1 className="display-5 fw-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Reservations Management</h1>
                <p className="text-muted fs-5">Oversee table bookings for today</p>
              </div>

              {/* View Toggle */}
              <div className="btn-group">
                <button 
                  onClick={() => setViewMode('list')}
                  className={`btn ${viewMode === 'list' ? 'btn-dark' : 'btn-outline-dark'}`}
                >
                  List View
                </button>
                <button 
                  onClick={() => setViewMode('calendar')}
                  className={`btn ${viewMode === 'calendar' ? 'btn-dark' : 'btn-outline-dark'}`}
                >
                  Calendar View
                </button>
              </div>
            </div>

            <div className="row g-4">
              {/* Left Column - Reservations List (70%) */}
              <div className="col-lg-8">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h4>Upcoming Today</h4>
                  <small className="text-muted">8 Pending • 14 Confirmed</small>
                </div>

                <div className="row g-4">
                  {reservations.map(res => (
                    <div key={res.id} className="col-12">
                      <div className="card border-0 shadow-sm hover-shadow">
                        <div className="card-body">
                          <div className="row align-items-center">
                            <div className="col-md-2 text-center border-end">
                              <h3 className="fw-bold text-dark mb-0">{res.time}</h3>
                              <small>PM</small>
                            </div>
                            <div className="col-md-7">
                              <div className="d-flex justify-content-between">
                                <div>
                                  <h5 className="mb-1">{res.name}</h5>
                                  <small className="text-muted">
                                    {res.guests} Guests • {res.table}
                                  </small>
                                </div>
                                <span className={`badge ${res.status === 'Confirmed' ? 'bg-success' : res.status === 'Arrived' ? 'bg-info' : 'bg-warning'}`}>
                                  {res.status.toUpperCase()}
                                </span>
                              </div>
                              <p className="text-muted small mt-2">{res.note}</p>
                            </div>
                            <div className="col-md-3 text-end">
                              {res.status === 'Pending' && (
                                <button className="btn btn-success w-100 mb-2">Confirm</button>
                              )}
                              {res.status === 'Confirmed' && (
                                <button className="btn btn-outline-success w-100">Mark as Arrived</button>
                              )}
                              {res.status === 'Arrived' && (
                                <div className="text-success fw-bold">✓ Arrived</div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Table Status & Occupancy (30%) */}
              <div className="col-lg-4">
                {/* Table Status */}
                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-header bg-white border-0">
                    <h5 className="mb-0">Table Status</h5>
                  </div>
                  <div className="card-body">
                    {tables.map((table, i) => (
                      <div key={i} className="d-flex justify-content-between align-items-center py-3 border-bottom">
                        <div>
                          <strong>Table #{table.number}</strong>
                          <small className="text-muted d-block">Cap: {table.capacity} Guests</small>
                        </div>
                        <div>
                          <span className={`badge ${table.status === 'Available' ? 'bg-success' : table.status === 'Occupied' ? 'bg-danger' : 'bg-secondary'}`}>
                            {table.status}
                          </span>
                        </div>
                      </div>
                    ))}
                    <button className="btn btn-outline-dark w-100 mt-4">Bulk Set Availability</button>
                  </div>
                </div>

                {/* Occupancy Snapshot */}
                <div className="card border-0 shadow-sm">
                  <div className="card-body">
                    <h5>Occupancy Snapshot</h5>
                    <p className="text-warning fs-4 fw-bold">78% Utilization</p>
                    
                    <div className="progress mb-4" style={{ height: '12px' }}>
                      <div className="progress-bar bg-warning" style={{ width: '78%' }}></div>
                    </div>

                    <div className="row text-center">
                      <div className="col-6">
                        <h4>64</h4>
                        <small className="text-muted">Tonight Guests</small>
                      </div>
                      <div className="col-6">
                        <h4>3</h4>
                        <small className="text-muted">Waiting</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminReservations;