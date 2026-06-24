import React from 'react';
import { Edit2, Plus, CreditCard, MapPin, User, Shield } from 'lucide-react';

function Profile() {
    return (
        <div className="container py-5">
            <div className="text-center mb-5">
                <div className="position-relative d-inline-block">
                    <div className="bg-dark rounded-3 p-3 shadow" style={{ width: '180px', margin: '0 auto' }}>
                        <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
                            alt="Arjun Malhotra"
                            className="rounded-2 img-fluid"
                            style={{ width: '140px', height: '180px', objectFit: 'cover' }}
                        />
                    </div>
                    <div className="position-absolute bottom-0 end-0 bg-warning rounded-circle p-2 shadow-sm">
                        <Edit2 size={18} className="text-dark" />
                    </div>
                </div>

                <h2 className="mt-4 mb-1 fw-bold">Arjun Malhotra</h2>
                <p className="text-muted">Gourmet Explorer • Member since 2022</p>
            </div>

            <div className="row g-4">
                {/* Personal Details */}
                <div className="col-lg-8">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <h5 className="mb-0">
                                    <User size={20} className="me-2" /> Personal Details
                                </h5>
                                <button className="btn btn-link text-warning fw-medium">EDIT INFO</button>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <p className="text-muted mb-1">Full Name</p>
                                    <p className="fw-medium">Arjun Malhotra</p>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <p className="text-muted mb-1">Email Address</p>
                                    <p className="fw-medium">arjun.m@designstudio.com</p>
                                </div>
                                <div className="col-md-6">
                                    <p className="text-muted mb-1">Phone Number</p>
                                    <p className="fw-medium">+1 (555) 012-3456</p>
                                </div>
                                <div className="col-md-6">
                                    <p className="text-muted mb-1">Date of Birth</p>
                                    <p className="fw-medium">October 14, 1992</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dietary Profile */}
                <div className="col-lg-4">
                    <div className="card border-0 shadow-sm h-100" style={{ backgroundColor: '#f0fdf4' }}>
                        <div className="card-body">
                            <h5 className="mb-3">
                                🍽️ Dietary Profile
                            </h5>
                            <div className="d-flex flex-wrap gap-2 mb-4">
                                <span className="badge bg-success fs-6 px-3 py-2">GLUTEN-FREE</span>
                                <span className="badge bg-success fs-6 px-3 py-2">NUT ALLERGY</span>
                                <span className="badge bg-success fs-6 px-3 py-2">MEDIUM SPICE</span>
                            </div>
                            <p className="text-muted small">
                                "We tailor our recommendations based on your unique palate."
                            </p>
                        </div>
                    </div>
                </div>

                {/* Saved Addresses */}
                <div className="col-lg-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <h5 className="mb-0">
                                    <MapPin size={20} className="me-2" /> Saved Addresses
                                </h5>
                                <button className="btn btn-outline-warning btn-sm">
                                    <Plus size={18} />
                                </button>
                            </div>

                            <div className="mb-4">
                                <div className="d-flex gap-3">
                                    <div className="bg-light rounded p-2">
                                        🏠
                                    </div>
                                    <div>
                                        <p className="fw-medium mb-1">Home</p>
                                        <p className="text-muted small mb-0">
                                            245 Heritage Walkway, Apartment 4B<br />
                                            New York, NY 10012
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="d-flex gap-3">
                                    <div className="bg-light rounded p-2">
                                        🏢
                                    </div>
                                    <div>
                                        <p className="fw-medium mb-1">Studio</p>
                                        <p className="text-muted small mb-0">
                                            88 Creative Plaza, 12th Floor<br />
                                            Brooklyn, NY 11201
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment Methods */}
                <div className="col-lg-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <h5 className="mb-4">
                                💳 Payment Methods
                            </h5>
                            <div className="bg-dark text-white rounded-3 p-4 mb-4">
                                <div className="d-flex justify-content-between align-items-start">
                                    <div>
                                        <p>Visa</p>
                                        <p className="mt-3 mb-0">•••• •••• •••• 8291</p>
                                        <small>EXP: 12/26</small>
                                    </div>
                                    <div className="text-end">
                                        <span className="badge bg-success">PRIMARY</span>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-outline-secondary w-100">
                                + ADD NEW CARD
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Account Security */}
            <div className="mt-5 border-top pt-4">
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div>
                        <h5 className="mb-1">
                            <Shield size={20} className="me-2" /> Account Security
                        </h5>
                        <p className="text-muted small mb-0">
                            Update your password or manage linked social accounts.
                        </p>
                    </div>
                    <div className="d-flex gap-3 mt-3 mt-md-0">
                        <button className="btn btn-outline-dark">SECURITY SETTINGS</button>
                        <button className="btn btn-dark">LOG OUT</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;