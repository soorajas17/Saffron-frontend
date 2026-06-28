import React, { useState } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import { Plus, Edit2, Trash2 } from 'lucide-react';

function AdminMenu() {
  const [activeCategory, setActiveCategory] = useState('All Categories');

  const categories = ['All Categories', 'Starters', 'Main Course', 'Biryani & Rice', 'Tandoor', 'Desserts'];

  const menuItems = [
    {
      id: 1,
      name: "Old Delhi Samosa",
      category: "Starters",
      price: 12.00,
      status: "In Stock",
      label: "CHEF’S SPECIAL",
      desc: "Crispy pastry filled with spiced potatoes and peas"
    },
    {
      id: 2,
      name: "Malai Paneer Tikka",
      category: "Starters",
      price: 16.50,
      status: "Out of Stock",
      label: "VEGETARIAN",
      desc: "Creamy cubes of cottage cheese marinated in yogurt"
    },
    {
      id: 3,
      name: "Awadhi Seekh Kebab",
      category: "Main Course",
      price: 18.00,
      status: "In Stock",
      label: "BEST SELLER",
      desc: "Hand-pounded lamb skewers infused with royal spices"
    },
    {
      id: 4,
      name: "Butter Chicken",
      category: "Main Course",
      price: 22.00,
      status: "In Stock",
      label: "SIGNATURE",
      desc: "Tandoor smoked chicken in rich tomato butter gravy"
    }
  ];

  const filteredItems = activeCategory === 'All Categories' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

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
                <h1 className="display-5 fw-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Menu Management</h1>
                <p className="text-muted fs-5">Curate the culinary journey of Saffron & Spice</p>
              </div>
              <button className="btn btn-dark btn-lg px-4 d-flex align-items-center gap-2">
                <Plus size={24} /> Add New Item
              </button>
            </div>

            {/* Category Filters */}
            <div className="d-flex gap-2 flex-wrap mb-5 pb-3 border-bottom">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`btn rounded-pill px-4 py-2 ${activeCategory === cat ? 'btn-dark' : 'btn-outline-dark'}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Menu Items Grid */}
            <div className="row g-4">
              {filteredItems.map(item => (
                <div key={item.id} className="col-lg-4 col-md-6">
                  <div className="card border-0 shadow-sm h-100 hover-shadow">
                    <div className="position-relative">
                      <img 
                        src={`https://picsum.photos/id/${100 + item.id}/600/300`} 
                        className="card-img-top" 
                        alt={item.name}
                        style={{ height: '180px', objectFit: 'cover' }}
                      />
                      <span className="badge bg-warning position-absolute top-3 start-3">{item.label}</span>
                    </div>
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h5 className="mb-1">{item.name}</h5>
                        <strong className="text-dark">₹{item.price}</strong>
                      </div>
                      <p className="text-muted small mb-3">{item.desc}</p>
                      
                      <div className="d-flex justify-content-between align-items-center">
                        <span className={`badge ${item.status === 'In Stock' ? 'bg-success' : 'bg-danger'}`}>
                          {item.status}
                        </span>
                        <div className="d-flex gap-2">
                          <button className="btn btn-outline-dark btn-sm">
                            <Edit2 size={16} />
                          </button>
                          <button className="btn btn-outline-danger btn-sm">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminMenu;