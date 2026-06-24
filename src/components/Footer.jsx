import React from 'react'

function Footer() {
    return (
        <>
            <div className="bg-white py-5 shadow-sm">
                <div className="container">
                    <div className="row g-4">

                        <div className="col-12 col-md-3">
                            <h3 style={{ color: "#B56A2D" }} className="fw-bold mb-4">
                                Saffron & Spice
                            </h3>
                            <p className="text-secondary">
                                Authentic Indian cuisine crafted for the modern palate.
                                Discover the journey of spices.
                            </p>
                        </div>

                        <div className="col-12 col-md-3">
                            <h4 className="fw-semibold mb-4 text-dark">Locations</h4>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <a href="#" className="text-decoration-none text-secondary">
                                        Mayfair, London
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-decoration-none text-secondary">
                                        Manhattan, NY
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-decoration-none text-secondary">
                                        Bandra, Mumbai
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-12 col-md-3">
                            <h4 className="fw-semibold mb-4 text-dark">Experience</h4>
                            <ul className="list-unstyled text-secondary">
                                <li className="mb-2">The Menu</li>
                                <li className="mb-2">Wine Cellar</li>
                                <li className="mb-2">Private Dining</li>
                                <li>Chef's Table</li>
                            </ul>
                        </div>

                        <div className="col-12 col-md-3">
                            <h4 className="fw-semibold mb-4 text-dark">Contact Us</h4>
                            <div className="d-flex flex-column gap-3">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="form-control"
                                />
                                <button
                                    className="btn text-white"
                                    style={{ backgroundColor: "#B56A2D" }}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className="text-center text-secondary mt-5 border-top pt-4">
                        © {new Date().getFullYear()} Saffron & Spice. All rights reserved.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
