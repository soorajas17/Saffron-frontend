import React from 'react';
import { Plus, TrendingUp, TrendingDown, Users, DollarSign, Clock, ChevronRight } from 'lucide-react';

function AdminDashboardContent() {
  // Dummy Data
  const liveOrders = [
    { id: "#ORD-2841", customer: "Karan Bhatia", table: "Table 4", time: "12:45 PM", amount: "₹4,250", status: "Preparing" },
    { id: "#ORD-2840", customer: "Meera Sharma", table: "Table 12", time: "12:38 PM", amount: "₹2,890", status: "Served" },
    { id: "#ORD-2839", customer: "Arjun Rao", table: "Table 7", time: "12:30 PM", amount: "₹6,100", status: "Preparing" },
  ];

  const weeklyData = [45, 62, 58, 75, 82, 68, 91]; // Sample percentages

  return (
    <div className="pt-5 mt-5 p-4">
      <div className="container-fluid">

        {/* Header & Greeting */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-5">
          <div>
            <h1 className="display-5 fw-bold text-dark" style={{ fontFamily: "'Playfair Display', serif" }}>
              Suprabhātam, Admin
            </h1>
            <p className="text-muted fs-5">Today's overview for Saffron & Spice Main Dining Room</p>
          </div>
          <button className="btn btn-dark btn-lg px-4 py-3 d-flex align-items-center gap-2 mt-3 mt-md-0">
            <Plus size={22} /> Create New Reservation
          </button>
        </div>

        {/* Key Metrics */}
        <div className="row g-4 mb-5">
          <div className="col-lg-3 col-md-6">
            <div className="card h-100 border-0 shadow-sm hover-border-warning">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <div>
                    <div className="text-muted small">TOTAL ORDERS</div>
                    <h3 className="fw-bold mb-1">142</h3>
                  </div>
                  <div className="text-success">+12% <TrendingUp size={20} /></div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="card h-100 border-0 shadow-sm hover-border-warning">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <div>
                    <div className="text-muted small">TODAY'S REVENUE</div>
                    <h3 className="fw-bold mb-1">₹84,200</h3>
                  </div>
                  <div className="text-success">+5.4% <TrendingUp size={20} /></div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="card h-100 border-0 shadow-sm hover-border-warning">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <div>
                    <div className="text-muted small">NEW RESERVATIONS</div>
                    <h3 className="fw-bold mb-1">28</h3>
                  </div>
                  <div className="text-danger">-2% <TrendingDown size={20} /></div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="card h-100 border-0 shadow-sm hover-border-warning">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <div>
                    <div className="text-muted small">TABLE OCCUPANCY</div>
                    <h3 className="fw-bold mb-1">84%</h3>
                  </div>
                  <div className="text-warning">Peak Level</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {/* Left Column - Live Orders + Chart */}
          <div className="col-lg-8">

            {/* Live Order Stream */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-header bg-white border-0 d-flex align-items-center justify-content-between py-4">
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-success rounded-circle" style={{ width: '10px', height: '10px', animation: 'pulse 2s infinite' }}></div>
                  <h5 className="mb-0 fw-semibold">Live Order Stream</h5>
                </div>
                <a href="#" className="text-warning text-decoration-none">View All History →</a>
              </div>
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead>
                    <tr>
                      <th>ORDER #</th>
                      <th>CUSTOMER</th>
                      <th>AMOUNT</th>
                      <th>STATUS</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {liveOrders.map((order) => (
                      <tr key={order.id}>
                        <td><strong className="text-primary">{order.id}</strong></td>
                        <td>
                          <div>{order.customer}</div>
                          <small className="text-muted">{order.table} • {order.time}</small>
                        </td>
                        <td><strong>{order.amount}</strong></td>
                        <td>
                          <span className={`badge ${order.status === 'Preparing' ? 'bg-success' : 'bg-secondary'}`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="text-end">
                          <ChevronRight size={20} className="text-muted" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Weekly Performance Chart */}
            <div className="card border-0 shadow-sm bg-dark text-white overflow-hidden">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start mb-4">
                  <div>
                    <h5>Weekly Performance</h5>
                    <small className="text-muted">Revenue trend for the current week</small>
                  </div>
                  <div className="text-end">
                    <h3 className="text-warning mb-0">₹5.8L</h3>
                    <small>+18% this week</small>
                  </div>
                </div>

                <div className="d-flex align-items-end gap-3" style={{ height: '220px' }}>
                  {weeklyData.map((height, i) => (
                    <div key={i} className="flex-grow-1 text-center">
                      <div 
                        className="bg-warning rounded-top mx-auto"
                        style={{ height: `${height}%`, width: '70%', minHeight: '30px' }}
                      ></div>
                      <small className="mt-2 d-block">
                        {['MON','TUE','WED','THU','FRI','SAT','SUN'][i]}
                      </small>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Upcoming Reservations */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-header bg-white border-0 d-flex justify-content-between align-items-center py-4">
                <h5 className="mb-0">Upcoming Reservations</h5>
                <button className="btn btn-link text-muted">⋯</button>
              </div>
              <div className="card-body">
                {[
                  { time: "19:30", name: "Karan Bhatia", people: 4, table: "Table 18" },
                  { time: "20:15", name: "Priya Menon", people: 2, table: "Table 9" },
                  { time: "21:00", name: "Vikram Singh", people: 6, table: "Table 5" }
                ].map((res, i) => (
                  <div key={i} className="border-bottom pb-3 mb-3">
                    <div className="d-flex gap-3">
                      <div className="bg-light rounded px-3 py-2 text-center" style={{ minWidth: '70px' }}>
                        <strong>{res.time}</strong><br />
                        <small>TODAY</small>
                      </div>
                      <div className="flex-grow-1">
                        <div className="fw-semibold">{res.name}</div>
                        <small className="text-muted">
                          👥 {res.people} People • {res.table}
                        </small>
                      </div>
                      <button className="btn btn-outline-secondary btn-sm">✏️</button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="card-footer bg-white border-0">
                <button className="btn btn-outline-dark w-100">View Full Reservation Log</button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Support Button */}
        <button 
          className="btn btn-warning position-fixed bottom-0 end-0 m-4 rounded-circle shadow-lg p-4"
          style={{ width: '70px', height: '70px', zIndex: 1050 }}
        >
          <span style={{ fontSize: '28px' }}>🛟</span>
        </button>
      </div>
    </div>
  );
}

export default AdminDashboardContent;