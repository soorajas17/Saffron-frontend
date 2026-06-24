import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Search, User } from 'lucide-react'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <>
            <Navbar bg="white" expand="lg" className="py-3 shadow-sm">
                <Container>
                    <Navbar.Brand
                        href="#"
                        className="fw-bold fs-3"
                        style={{ color: "#B56A2D" }}
                    >
                         Spices
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbar-nav" />

                    <Navbar.Collapse id="navbar-nav">

                        <Nav className="mx-auto">
                            <Nav.Link
                                href="#"
                                className="fw-semibold"
                                style={{
                                    color: "#B56A2D",
                                    borderBottom: "2px solid #B56A2D",
                                }}
                            >
                                Menu
                            </Nav.Link>

                            <Nav.Link href="#" className="text-dark">
                                Book a Table
                            </Nav.Link>

                            <Nav.Link href="#" className="text-dark">
                                My Orders
                            </Nav.Link>
                        </Nav>

                        <div className="d-flex align-items-center gap-3">
                            <Search size={18} />

                            <Link to="/profile" className="text-decoration-none text-dark" >
                                <div
                                    className="border rounded-circle d-flex justify-content-center align-items-center"
                                    style={{
                                        width: "35px",
                                        height: "35px",
                                    }}
                                >
                                    <User size={20} />
                                </div>
                            </Link>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
