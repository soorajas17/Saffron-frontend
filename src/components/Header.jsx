import React, { useState } from 'react'
import { Container, Nav, Navbar, Dropdown, Form } from 'react-bootstrap'
import { LogOut, Package, Search, User } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
function Header() {
    const [showSearch, setShowSearch] = useState(false);
    const user = {
        name: "Sooraj As",
        email: "soorajas1753@gmail.com"
    };

    return (
        <>
            <Navbar bg="white" expand="lg" className="py-3 shadow-sm">
                <Container>
                    <Navbar.Brand
                        href="/"
                        className="fw-bold fs-3"
                        style={{ color: "#B56A2D" }}
                    >
                        Saffron & Spice
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbar-nav" />

                    <Navbar.Collapse id="navbar-nav">

                        <Nav className="mx-auto">
                            <NavLink to="/"
                                className={({ isActive }) => `nav-link fw-semibold ${isActive ? "active-nav" : ""}`}>
                                Menu
                            </NavLink>

                            <NavLink to="/booking" className={({ isActive }) => `nav-link ${isActive ? "active-nav" : ""}`}>
                                Book a Table
                            </NavLink>

                            <NavLink to="/orders" className={({ isActive }) => `nav-link ${isActive ? "active-nav" : ""}`}>
                                My Orders
                            </NavLink>
                        </Nav>

                        <div className="d-flex align-items-center gap-3">
                            <div className='d-none d-lg-flex align-items-center'>
                                {showSearch && (
                                    <Form.Control type="text" placeholder="Search.." className="me-2" style={{ width: "220px", transition: "0.3s" }} />
                                )}
                                <Search size={20} className='header-icon' onClick={() => setShowSearch(!showSearch)} style={{ cursor: "pointer" }} />
                            </div>

                            <Dropdown align="end" >
                                <Dropdown.Toggle variant='light' className='border-0 bg-transparent p-0' id='dropdown-profile' >
                                    <div className="profile-circle">
                                        <User size={20} />
                                    </div>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="shadow border-0 p-2" style={{
                                    minWidth: "240px", borderRadius: "12px", background: "#FFF8F0"
                                }}>
                                    <div className="px-3 pb-2">
                                        <h6 className="mb-0 fw-bold">{user.name}</h6>
                                        <small className="text-muted">{user.email}</small>
                                    </div>
                                    <Dropdown.Divider />
                                    <Dropdown.Item as={Link} to="/profile">
                                        <User size={16} className="me-2" />
                                        Profile
                                    </Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/orders">
                                        <Package size={16} className="me-2" />
                                        My Orders
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item>
                                        <LogOut size={16} className="me-2 text-danger" />
                                        Logout
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
