import React, { useState } from 'react';
import { Plus, Filter, Download, Clock, TrendingUp, Users } from 'lucide-react';
import AdminSidebar from '../components/AdminSidebar';

function AdminOrders() {
  const [activeFilter, setActiveFilter] = useState('All Orders');

  const orders = [
    { id: "#ORD-8842", time: "12:45 PM", customer: "Karan Bhatia", items: "Butter Chicken + 2 more", amount: "₹4,250", status: "Preparing" },
    { id: "#ORD-8841", time: "12:38 PM", customer: "Meera Sharma", items: "Paneer Tikka Masala", amount: "₹2,890", status: "Completed" },
    { id: "#ORD-8840", time: "12:30 PM", customer: "Arjun Rao", items: "Saffron Lobster", amount: "₹6,100", status: "Preparing" },
  ];

  const filters = ['All Orders', 'Pending', 'Processing', 'Completed'];

  return (
    <div className="d-flex min-vh-100">
      {/* Left Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-grow-1" style={{ marginLeft: '260px' }}>
        <div className="p-4 pt-5">
          <div className="container-fluid">

            {/* Header */}
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-4">
              <div>
                <h1 className="display-5 fw-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Orders Management</h1>
                <p className="text-muted fs-5">Real-time order tracking &amp; management</p>
              </div>
              <button className="btn btn-dark btn-lg px-4 d-flex align-items-center gap-2">
                <Plus size={24} /> New Manual Order
              </button>
            </div>

            {/* Filter Bar */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body py-3">
                <div className="d-flex flex-wrap gap-2 align-items-center">
                  {filters.map(filter => (
                    <button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className={`btn rounded-pill px-4 py-2 ${activeFilter === filter ? 'btn-dark' : 'btn-outline-dark'}`}
                    >
                      {filter}
                    </button>
                  ))}

                  <div className="ms-auto d-flex gap-3">
                    <button className="btn btn-outline-secondary d-flex align-items-center gap-2">
                      <Filter size={18} /> Filters
                    </button>
                    <button className="btn btn-outline-secondary d-flex align-items-center gap-2">
                      <Download size={18} /> Export
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Orders Table */}
            <div className="card border-0 shadow-sm mb-5">
              <div className="table-responsive">
                <table className="table table-hover mb-0 align-middle">
                  <thead className="table-light">
                    <tr>
                      <th>ORDER ID</th>
                      <th>TIME</th>
                      <th>CUSTOMER</th>
                      <th>ITEMS</th>
                      <th>TOTAL</th>
                      <th>STATUS</th>
                      <th>ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order, i) => (
                      <tr key={i}>
                        <td><strong className="text-primary">{order.id}</strong></td>
                        <td><small className="text-muted">{order.time}</small></td>
                        <td>
                          <div className="d-flex align-items-center gap-3">
                            <div className="bg-warning text-dark rounded-circle d-flex align-items-center justify-content-center" style={{width:'40px', height:'40px', fontSize:'14px'}}>
                              {order.customer.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>{order.customer}</div>
                          </div>
                        </td>
                        <td>{order.items}</td>
                        <td><strong>{order.amount}</strong></td>
                        <td>
                          <span className={`badge ${order.status === 'Preparing' ? 'bg-warning' : 'bg-success'}`}>
                            {order.status}
                          </span>
                        </td>
                        <td>
                          <button className="btn btn-sm btn-outline-primary">View</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Summary Cards */}
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card border-0 shadow-sm bg-warning bg-opacity-10 h-100">
                  <div className="card-body">
                    <h4>₹84,200</h4>
                    <p className="text-muted mb-1">Today's Revenue</p>
                    <small className="text-success">+12% from yesterday</small>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-0 shadow-sm bg-info bg-opacity-10 h-100">
                  <div className="card-body">
                    <h4>142</h4>
                    <p className="text-muted mb-1">Total Orders</p>
                    <small className="text-success">+8 today</small>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-0 shadow-sm bg-success bg-opacity-10 h-100">
                  <div className="card-body">
                    <h4>18 min</h4>
                    <p className="text-muted mb-1">Avg. Prep Time</p>
                    <small className="text-danger">-2 min faster</small>
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

export default AdminOrders;