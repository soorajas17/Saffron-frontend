import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import OrderSuccess from "../components/OrderSuccess";

const Checkout = ({ show, handleClose }) => {

  const [successModal, setSuccessModal] = useState(false);

   const handlePlaceOrder = () => {
    handleClose(); // close checkout modal
    setSuccessModal(true); // open success modal
  };

  return (
    <>
     <Modal
      show={show}
      onHide={handleClose}
      centered
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>
          Review Your Order
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>

        <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
          <h5>Butter Chicken</h5>
          <div>x 2</div>
          <strong>₹560</strong>
        </div>

        <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
          <h5>Garlic Naan</h5>
          <div>x 4</div>
          <strong>₹240</strong>
        </div>

        <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-2">
          <h5>Paneer Tikka</h5>
          <div>x 1</div>
          <strong>₹320</strong>
        </div>

        <div className="border-bottom pb-3">

          <div className="d-flex justify-content-between mb-2">
            <span>Subtotal</span>
            <span>₹1120</span>
          </div>

          <div className="d-flex justify-content-between mb-2">
            <span>Delivery Charge</span>
            <span>₹50</span>
          </div>

          <div className="d-flex justify-content-between text-success mb-2">
            <span>Discount (WELCOME10)</span>
            <span>- ₹100</span>
          </div>

        </div>

        <div className="d-flex justify-content-between mt-3">
          <h4>Total Amount</h4>
          <h4>₹1070</h4>
        </div>

        <hr />

        <h5 className="mb-3">
          Select Payment Method
        </h5>

        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="radio"
            name="payment"
            defaultChecked
          />
          <label className="form-check-label">
            UPI
          </label>
        </div>

        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="radio"
            name="payment"
          />
          <label className="form-check-label">
            Credit / Debit Card
          </label>
        </div>

        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="radio"
            name="payment"
          />
          <label className="form-check-label">
            Cash On Delivery
          </label>
        </div>

      </Modal.Body>

      <Modal.Footer>

        <Button
          variant="secondary"
          onClick={handleClose}
        >
          Cancel
        </Button>

        <Button
        onClick={handlePlaceOrder}
          style={{
            
            backgroundColor: "#FFAA33",
            border: "none",
            color: "black",
            fontWeight: "bold"
          }}
        >
          Place Order
        </Button>

      </Modal.Footer>

    </Modal>
    <OrderSuccess
    show={successModal}
      handleClose={() => setSuccessModal(false)}/>
    </>
   

      
  );
};

export default Checkout;