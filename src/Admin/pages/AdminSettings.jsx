import React, { useState } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import { Save, X, Upload } from 'lucide-react';

function AdminSettings() {
  const [formData, setFormData] = useState({
    restaurantName: "Saffron & Spice",
    cuisineType: "Indian • Fusion",
    primaryContact: "+91 98765 43210",
    address: "45 Spice Avenue, MG Road, Bangalore",
    instagram: "https://instagram.com/saffronandspice",
    facebook: "https://facebook.com/saffronandspice",
    website: "https://saffronandspice.in"
  });

  const [lastSaved, setLastSaved] = useState("Today at 2:45 PM");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    alert("✅ Settings saved successfully!");
    setLastSaved("Just now");
  };

  const handleDiscard = () => {
    if (window.confirm("Discard all changes?")) {
      // Reset to original values (mock)
      setFormData({
        restaurantName: "Saffron & Spice",
        cuisineType: "Indian • Fusion",
        primaryContact: "+91 98765 43210",
        address: "45 Spice Avenue, MG Road, Bangalore",
        instagram: "https://instagram.com/saffronandspice",
        facebook: "https://facebook.com/saffronandspice",
        website: "https://saffronandspice.in"
      });
    }
  };

  return (
    <div className="d-flex min-vh-100">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-grow-1" style={{ marginLeft: '260px' }}>
        <div className="p-4 pt-5">
          <div className="container-fluid">

            {/* Header */}
            <div className="mb-5">
              <h1 className="display-5 fw-bold">Settings</h1>
              <p className="text-muted fs-5">Manage your restaurant configuration</p>
            </div>

            {/* Search Bar */}
            <div className="input-group mb-5" style={{ maxWidth: '500px' }}>
              <span className="input-group-text"><span>🔍</span></span>
              <input 
                type="text" 
                className="form-control" 
                placeholder="Search settings..." 
              />
            </div>

            <div className="row g-5">
              {/* Restaurant Profile */}
              <div className="col-lg-8">
                <div className="card border-0 shadow-sm">
                  <div className="card-header bg-white border-0 py-4">
                    <h4>Restaurant Profile</h4>
                  </div>
                  <div className="card-body">
                    <div className="row g-4">
                      <div className="col-md-8">
                        <label className="form-label fw-semibold">Restaurant Name</label>
                        <input 
                          type="text" 
                          name="restaurantName"
                          className="form-control form-control-lg" 
                          value={formData.restaurantName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-4">
                        <label className="form-label fw-semibold">Cuisine Type</label>
                        <input 
                          type="text" 
                          name="cuisineType"
                          className="form-control" 
                          value={formData.cuisineType}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-12">
                        <label className="form-label fw-semibold">Primary Contact</label>
                        <input 
                          type="tel" 
                          name="primaryContact"
                          className="form-control" 
                          value={formData.primaryContact}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-12">
                        <label className="form-label fw-semibold">Address</label>
                        <textarea 
                          name="address"
                          className="form-control" 
                          rows={3}
                          value={formData.address}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-md-4">
                        <label className="form-label fw-semibold">Instagram</label>
                        <input 
                          type="text" 
                          name="instagram"
                          className="form-control" 
                          value={formData.instagram}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-4">
                        <label className="form-label fw-semibold">Facebook</label>
                        <input 
                          type="text" 
                          name="facebook"
                          className="form-control" 
                          value={formData.facebook}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-4">
                        <label className="form-label fw-semibold">Website</label>
                        <input 
                          type="text" 
                          name="website"
                          className="form-control" 
                          value={formData.website}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Logo Upload */}
              <div className="col-lg-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body text-center">
                    <h5 className="mb-4">Restaurant Logo</h5>
                    
                    <div className="border border-2 border-dashed rounded-4 p-5 mb-4">
                      <div className="mx-auto bg-light rounded-circle d-flex align-items-center justify-content-center mb-3" style={{width: '120px', height: '120px'}}>
                        <span className="display-1 text-warning">S</span>
                      </div>
                      <p className="text-muted small">Click to upload new logo</p>
                    </div>

                    <button className="btn btn-outline-dark w-100 d-flex align-items-center justify-content-center gap-2">
                      <Upload size={20} /> Upload Logo
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-5 d-flex gap-3 flex-wrap">
              <button 
                onClick={handleSave}
                className="btn btn-success btn-lg px-5 d-flex align-items-center gap-2"
              >
                <Save size={22} /> Save All Changes
              </button>
              <button 
                onClick={handleDiscard}
                className="btn btn-outline-secondary btn-lg px-5"
              >
                <X size={22} /> Discard Changes
              </button>
            </div>

            <div className="mt-4 text-muted small">
              Last saved: <strong>{lastSaved}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSettings;