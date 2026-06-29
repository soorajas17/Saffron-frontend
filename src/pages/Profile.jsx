import React, { useEffect, useRef } from 'react';
import { Edit2, Plus, CreditCard, MapPin, User, Shield } from 'lucide-react';
import { getAddressAPI, addAddressAPI, getProfileAPI, updateProfileAPI, deleteAddressAPI, updateProfileImageAPI } from '../services/allApi';
import { useState } from 'react';
import { Modal, Button, Form } from "react-bootstrap";

function Profile() {

    const [user, setUser] = useState({});
    const [showEditModal, setShowEditModal] = useState(false);
    const [editData, setEditData] = useState({
        fullName: "",
        email: "",
        phone: "",
        dob: ""
    });
    const [showAddressModal, setShowAddressModal] = useState(false);
    const [addresses, setAddresses] = useState([]);
    const [addressData, setAddressData] = useState({
        addressType: "",
        addressLine: "",
        city: "",
        state: "",
        pincode: ""
    });

    const fileRef = useRef();


    // edit info
    const handleEdit = () => {

        setEditData({
            fullName: user.fullName,
            email: user.email,
            phone: user.phone,
            dob: user.dob ? user.dob.split("T")[0] : ""
        });

        setShowEditModal(true);
    }

    // getAddress
    const getAddress = async () => {

        const token = localStorage.getItem("token");

        if (!token) return;

        const reqHeader = {
            Authorization: `Bearer ${token}`
        };

        try {
            const result = await getAddressAPI(reqHeader);
            console.log(result);

            if (result.status === 200) {

                setAddresses(result.data);
            }
        } catch (err) {
            console.log(err);
        }
    };

    // updateProfile
    const updateProfile = async () => {

        const token = localStorage.getItem("token");

        if (!token) {
            return;
        }

        const reqHeader = {
            Authorization: `Bearer ${token}`
        };

        try {

            const result = await updateProfileAPI(editData, reqHeader);

            console.log(result);

            if (result.status === 200) {

                alert("Profile Updated Successfully");

                setShowEditModal(false);

                getProfile();

            }

        } catch (err) {

            console.log(err);

            alert("Something went wrong");

        }

    }

    // addAddressApi
    const addAddress = async () => {

        const token = localStorage.getItem("token");

        if (!token) return;

        const reqHeader = {
            Authorization: `Bearer ${token}`
        };

        try {

            const result = await addAddressAPI(addressData, reqHeader);

            if (result.status === 200) {

                alert("Address Added Successfully");

                setShowAddressModal(false);

                setAddressData({
                    addressType: "",
                    addressLine: "",
                    city: "",
                    state: "",
                    pincode: ""
                });

                getAddress();

            }

        } catch (err) {

            console.log(err);

            alert("Something went wrong");

        }
    };

    // get profile
    const getProfile = async () => {

        const token = localStorage.getItem("token");

        if (token) {

            const reqHeader = {
                Authorization: `Bearer ${token}`
            };

            const result = await getProfileAPI(reqHeader);
            console.log(result);

            if (result.status === 200) {
                setUser(result.data);
            }

        }
    };

    // delete-address
    const deleteAddress = async (id) => {

        const token = localStorage.getItem("token");

        if (!token) return;

        const reqHeader = {
            Authorization: `Bearer ${token}`
        };

        try {
            const result = await deleteAddressAPI(id, reqHeader);
            if (result.status === 200) {
                alert("Address Deleted Successfully");
                getAddress();
            }
        } catch (err) {
            console.log(err);
            alert("Something went wrong");
        }
    };

    // updateImage
    const handleProfileImage = async (e) => {

        const file = e.target.files[0];

        if (!file) return;

        const formData = new FormData();

        formData.append("profilePic", file);

        const token = localStorage.getItem("token");

        const reqHeader = {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data"
        };

        try {

            const result = await updateProfileImageAPI(formData, reqHeader);
            console.log(result);

            if (result.status === 200) {
                setUser(result.data);
                alert("Profile image updated successfully");

                getProfile();

            }

        } catch (err) {

            console.log(err);

        }

    };

    useEffect(() => {
        getProfile();
        getAddress();
    }, []);

    return (
        <>

            <div className="container py-5">
                <div className="text-center mb-5">
                    <div className="position-relative d-inline-block">
                        <div className="bg-dark rounded-3 p-3 shadow" style={{ width: '180px', margin: '0 auto' }}>
                            <input
                                type="file"
                                ref={fileRef}
                                hidden
                                accept="image/*"
                                onChange={handleProfileImage}
                            />
                            <img
                                src={
                                    user.profilePic
                                        ? `http://localhost:4000/uploads/${user.profilePic}`
                                        : "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
                                }
                                alt={user.fullName}
                                className="rounded-2 img-fluid"
                                style={{
                                    width: "140px",
                                    height: "180px",
                                    objectFit: "cover"
                                }}
                            />
                        </div>
                        <button
                            className="position-absolute bottom-0 end-0 bg-warning rounded-circle border-0 shadow-sm d-flex justify-content-center align-items-center"
                            style={{
                                width: "42px",
                                height: "42px",
                                cursor: "pointer"
                            }}
                            onClick={() => fileRef.current.click()}
                        >
                            <Edit2 size={18} className="text-dark" />
                        </button>
                    </div>

                    <h2 className="mt-4 mb-1 fw-bold">{user.fullName}</h2>
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
                                    <button onClick={handleEdit} className="btn btn-link text-warning fw-medium">EDIT INFO</button>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <p className="text-muted mb-1">Full Name</p>
                                        <p className="fw-medium">{user.fullName}</p>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <p className="text-muted mb-1">Email Address</p>
                                        <p className="fw-medium">{user.email}</p>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="text-muted mb-1">Phone Number</p>
                                        <p className="fw-medium">+91 {user.phone}</p>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="text-muted mb-1">Date of Birth</p>
                                        <p>
                                            {user.dob
                                                ? new Date(user.dob).toLocaleDateString("en-GB")
                                                : "Not Available"}
                                        </p>
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
                                        <MapPin size={20} className="me-2" />
                                        Saved Addresses
                                    </h5>

                                    <button
                                        className="btn btn-outline-warning btn-sm"
                                        onClick={() => setShowAddressModal(true)}
                                    >
                                        <Plus size={18} />
                                    </button>

                                </div>

                                {addresses.length > 0 ? (

                                    addresses.map((item) => (

                                        <div
                                            key={item._id}
                                            className="mb-4 border-bottom pb-3"
                                        >

                                            <div className="d-flex justify-content-between">

                                                <div className="d-flex gap-3">

                                                    <div className="bg-light rounded p-2">

                                                        {item.addressType === "Home"
                                                            ? "🏠"
                                                            : item.addressType === "Studio"
                                                                ? "🏢"
                                                                : "📍"}
                                                    </div>
                                                    <div>
                                                        <p className="fw-medium mb-1">
                                                            {item.addressType}
                                                        </p>

                                                        <p className="text-muted small mb-0">
                                                            {item.addressLine}
                                                            <br />
                                                            {item.city}, {item.state} {item.pincode}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <button
                                                        className="btn btn-sm btn-outline-danger"
                                                        onClick={() => {
                                                            if (window.confirm("Are you sure you want to delete this address?")) {
                                                                deleteAddress(item._id);
                                                            }
                                                        }}
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-center text-muted">
                                        No saved addresses found.
                                    </p>
                                )}
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

            {/* modal */}
            <Modal
                show={showEditModal}
                onHide={() => setShowEditModal(false)}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Personal Details</Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <Form.Group className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={editData.fullName}
                            onChange={(e) =>
                                setEditData({
                                    ...editData,
                                    fullName: e.target.value
                                })
                            }
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            value={editData.email}
                            onChange={(e) =>
                                setEditData({
                                    ...editData,
                                    email: e.target.value
                                })
                            }
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                            type="text"
                            value={editData.phone}
                            onChange={(e) =>
                                setEditData({
                                    ...editData,
                                    phone: e.target.value
                                })
                            }
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control
                            type="date"
                            value={editData.dob}
                            onChange={(e) =>
                                setEditData({
                                    ...editData,
                                    dob: e.target.value
                                })
                            }
                        />
                    </Form.Group>

                </Modal.Body>

                <Modal.Footer>

                    <Button
                        variant="secondary"
                        onClick={() => setShowEditModal(false)}
                    >
                        Cancel
                    </Button>

                    <Button
                        variant="warning"
                        onClick={updateProfile}
                    >
                        Update Profile
                    </Button>

                </Modal.Footer>
            </Modal>

            {/* addAddressModal */}
            <Modal
                show={showAddressModal}
                onHide={() => setShowAddressModal(false)}
                centered
            >

                <Modal.Header closeButton>
                    <Modal.Title>Add Address</Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <Form.Group className="mb-3">
                        <Form.Label>Address Type</Form.Label>

                        <Form.Select
                            value={addressData.addressType}
                            onChange={(e) =>
                                setAddressData({
                                    ...addressData,
                                    addressType: e.target.value
                                })
                            }
                        >
                            <option value="">Select Type</option>
                            <option>Home</option>
                            <option>Studio</option>
                            <option>Office</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Address Line</Form.Label>

                        <Form.Control
                            as="textarea"
                            rows={2}
                            value={addressData.addressLine}
                            onChange={(e) =>
                                setAddressData({
                                    ...addressData,
                                    addressLine: e.target.value
                                })
                            }
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>City</Form.Label>

                        <Form.Control
                            type="text"
                            value={addressData.city}
                            onChange={(e) =>
                                setAddressData({
                                    ...addressData,
                                    city: e.target.value
                                })
                            }
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>State</Form.Label>

                        <Form.Control
                            type="text"
                            value={addressData.state}
                            onChange={(e) =>
                                setAddressData({
                                    ...addressData,
                                    state: e.target.value
                                })
                            }
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Pincode</Form.Label>

                        <Form.Control
                            type="text"
                            value={addressData.pincode}
                            onChange={(e) =>
                                setAddressData({
                                    ...addressData,
                                    pincode: e.target.value
                                })
                            }
                        />
                    </Form.Group>

                </Modal.Body>

                <Modal.Footer>

                    <Button
                        variant="secondary"
                        onClick={() => setShowAddressModal(false)}
                    >
                        Cancel
                    </Button>

                    <Button
                        variant="warning"
                        onClick={addAddress}
                    >
                        Save Address
                    </Button>

                </Modal.Footer>

            </Modal>
        </>
    );
}

export default Profile;