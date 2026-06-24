import React from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

const OrderSuccess = ({ show, handleClose }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="lg"
    >
      <Modal.Body className="p-4">

        {/* Close Button */}
        <div className="text-end">
          <button
            className="btn-close"
            onClick={handleClose}
          ></button>
        </div>

        {/* Success Icon */}
        <div className="text-center">

          <div
            className="mx-auto mb-3 d-flex justify-content-center align-items-center"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              backgroundColor: "#E8F8EC",
              border: "10px solid #DDF2E2"
            }}
          >
            <span
              style={{
                fontSize: "60px",
                color: "green",
                fontWeight: "bold"
              }}
            >
              ✓
            </span>
          </div>

          <h1
            className="fw-bold text-success"
          >
            Order Placed Successfully!
          </h1>

          <p className="text-muted fs-5">
            Thank you for ordering with us.
          </p>

        </div>

        {/* Order ID */}

        <div
          className="border rounded p-3 text-center my-4"
          style={{
            backgroundColor: "#F7FBF8",
            borderColor: "#D4EED8"
          }}
        >
          <h4>Order ID</h4>

          <h1
            className="fw-bold text-success"
          >
            ORD-2026-001
          </h1>
        </div>

        {/* Restaurant */}

        <div className="card mb-3">
          <div className="card-body d-flex align-items-center">

            <div
              className="me-3 rounded p-3"
              style={{
                backgroundColor: "#F1EDFF"
              }}
            >
              🏪
            </div>

            <div>
              <h4 className="mb-1">
                Restaurant
              </h4>

              <h5 className="mb-1">
                Team G Restaurant
              </h5>

              <small className="text-muted">
                Premium Dining Experience
              </small>
            </div>

          </div>
        </div>

        {/* Delivery Time */}

        <div className="card mb-3">
          <div className="card-body d-flex align-items-center">

            <div
              className="me-3 rounded p-3"
              style={{
                backgroundColor: "#FFF1DE"
              }}
            >
              ⏰
            </div>

            <div>
              <h4 className="mb-1">
                Estimated Delivery Time
              </h4>

              <h5>
                35 - 45 Minutes
              </h5>
            </div>

          </div>
        </div>

        {/* Address */}

        <div className="card mb-4">
          <div className="card-body d-flex align-items-center">

            <div
              className="me-3 rounded p-3"
              style={{
                backgroundColor: "#E7F7EA"
              }}
            >
              📍
            </div>

            <div>
              <h4 className="mb-1">
                Delivery Address
              </h4>

              <h5>
                MG Road, Kochi, Kerala, India
              </h5>
            </div>

          </div>
        </div>

        {/* Buttons */}

        <div className="row">

          <div className="col-md-4 mb-2">
            <button
              className="btn btn-light border w-100"
              onClick={handleClose}
            >
              Close
            </button>
          </div>

          <div className="col-md-4 mb-2">
            <button
              className="btn btn-dark w-100"
            >
              🚚 Track Order
            </button>
          </div>

          <div className="col-md-4 mb-2">
            <Link
              to="/"
              className="btn w-100"
              style={{
                backgroundColor: "#FFB000",
                color: "white",
                fontWeight: "bold"
              }}
            >
              🏠 Back To Home
            </Link>
          </div>

        </div>

      </Modal.Body>
    </Modal>
  );
};

export default OrderSuccess;