import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Dropdown, Form } from "react-bootstrap";
import { LogOut, Package, Search, User } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getProfileAPI } from "../services/allApi";

function Header() {
    const [showSearch, setShowSearch] = useState(false);
    const [user, setUser] = useState({});

    const navigate = useNavigate();

    const checkLogin = (path) => {

        const token = localStorage.getItem("token");

        if (!token) {
            alert("You need to login first.");
            navigate("/login");
        } else {
            navigate(path);
        }

    };

    // Get Logged User
    const getUser = async () => {
        const token = localStorage.getItem("token");

        if (!token) return;

        const reqHeader = {
            Authorization: `Bearer ${token}`,
        };

        try {
            const result = await getProfileAPI(reqHeader);

            if (result.status === 200) {
                setUser(result.data);
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    // Logout
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        setUser({});

        navigate("/login");
    };

    return (
        <Navbar bg="white" expand="lg" className="py-3 shadow-sm">
            <Container>
                <Navbar.Brand
                    as={Link}
                    to="/"
                    className="fw-bold fs-3"
                    style={{ color: "#B56A2D" }}
                >
                    Saffron & Spice
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbar-nav" />

                <Navbar.Collapse id="navbar-nav">

                    <Nav className="mx-auto">

                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `nav-link fw-semibold ${isActive ? "active-nav" : ""}`
                            }
                        >
                            Menu
                        </NavLink>

                        <NavLink
                            to="/booking"
                            onClick={(e) => {
                                const token = localStorage.getItem("token");

                                if (!token) {
                                    e.preventDefault(); // Stop navigation
                                    alert("You need to login first.");
                                    navigate("/login");
                                }
                            }}
                            className={({ isActive }) =>
                                `nav-link ${isActive ? "active-nav" : ""}`
                            }
                        >
                            Book a Table
                        </NavLink>

                        <NavLink
                            to="/orders"
                            onClick={(e) => {
                                const token = localStorage.getItem("token");

                                if (!token) {
                                    e.preventDefault();
                                    alert("You need to login first.");
                                    navigate("/login");
                                }
                            }}
                            className={({ isActive }) =>
                                `nav-link ${isActive ? "active-nav" : ""}`
                            }
                        >
                            My Orders
                        </NavLink>

                    </Nav>

                    <div className="d-flex align-items-center gap-3">

                        <div className="d-none d-lg-flex align-items-center">

                            {showSearch && (
                                <Form.Control
                                    type="text"
                                    placeholder="Search..."
                                    className="me-2"
                                    style={{ width: "220px" }}
                                />
                            )}

                            <Search
                                size={20}
                                style={{ cursor: "pointer" }}
                                onClick={() => setShowSearch(!showSearch)}
                            />

                        </div>

                        {/* If User NOT Logged In */}

                        {!localStorage.getItem("token") ? (

                            <div
                                className="profile-circle"
                                style={{ cursor: "pointer" }}
                                onClick={() => navigate("/login")}
                            >
                                <User size={20} />
                            </div>

                        ) : (

                            <Dropdown align="end">

                                <Dropdown.Toggle
                                    variant="light"
                                    className="border-0 bg-transparent p-0"
                                    id="dropdown-profile"
                                >
                                    <div className="profile-circle">
                                        <User size={20} />
                                    </div>
                                </Dropdown.Toggle>

                                <Dropdown.Menu
                                    className="shadow border-0 p-2"
                                    style={{
                                        minWidth: "240px",
                                        borderRadius: "12px",
                                        background: "#FFF8F0",
                                    }}
                                >
                                    <div className="px-3 pb-2">
                                        <h6 className="mb-0 fw-bold">
                                            {user.fullName}
                                        </h6>

                                        <small className="text-muted">
                                            {user.email}
                                        </small>
                                    </div>

                                    <Dropdown.Divider />

                                    <Dropdown.Item
                                        as={Link}
                                        to="/profile"
                                    >
                                        <User
                                            size={16}
                                            className="me-2"
                                        />
                                        Profile
                                    </Dropdown.Item>

                                    <Dropdown.Item
                                        as={Link}
                                        to="/orders"
                                    >
                                        <Package
                                            size={16}
                                            className="me-2"
                                        />
                                        My Orders
                                    </Dropdown.Item>

                                    <Dropdown.Divider />

                                    <Dropdown.Item
                                        onClick={handleLogout}
                                        className="text-danger"
                                    >
                                        <LogOut
                                            size={16}
                                            className="me-2"
                                        />
                                        Logout
                                    </Dropdown.Item>

                                </Dropdown.Menu>

                            </Dropdown>

                        )}

                    </div>

                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default Header;