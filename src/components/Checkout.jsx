import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import OrderSuccess from "../components/OrderSuccess";
import {
  getCartAPI,
  getPaymentMethodsAPI,
  placeOrderAPI,
} from "../services/allAPI";

const Checkout = ({ show, handleClose }) => {

  const [cartItems, setCartItems] = useState([]);
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [successModal, setSuccessModal] = useState(false);

  // Load Cart
  const getCart = async () => {

    const token = sessionStorage.getItem("token");

    if (token) {

      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };

      const result = await getCartAPI(reqHeader);

      if (result.status === 200) {
        setCartItems(result.data);
      }
    }
  };

  // Load Payment Methods
  const getPaymentMethods = async () => {

    const result = await getPaymentMethodsAPI();

    if (result.status === 200) {
      setPaymentMethods(result.data);
      setPaymentMethod(result.data[0]);
    }
  };

  useEffect(() => {

    if (show) {
      getCart();
      getPaymentMethods();
    }

  }, [show]);

  // Calculate Total

  const subtotal = cartItems.reduce(
    (total, item) => total + item.subtotal,
    0
  );

  const deliveryCharge = 50;

  const totalAmount = subtotal + deliveryCharge;

  // Place Order

  const handlePlaceOrder = async () => {

    const token = sessionStorage.getItem("token");

    if (!deliveryAddress) {
      alert("Enter Delivery Address");
      return;
    }

    const reqBody = {
      deliveryAddress,
      paymentMethod,
    };

    const reqHeader = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    const result = await placeOrderAPI(reqBody, reqHeader);

    if (result.status === 201) {

      handleClose();

      setSuccessModal(true);

    } else {

      alert("Failed to Place Order");

    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered size="lg">

        <Modal.Header closeButton>
          <Modal.Title>Review Your Order</Modal.Title>
        </Modal.Header>

        <Modal.Body>

          {
            cartItems.map(item => (

              <div
                key={item._id}
                className="d-flex justify-content-between border-bottom mb-3 pb-2"
              >
                <div>
                  <h5>{item.foodName}</h5>
                  <small>x {item.quantity}</small>
                </div>

                <strong>₹{item.subtotal}</strong>

              </div>

            ))
          }

          <div className="border-bottom pb-3">

            <div className="d-flex justify-content-between">

              <span>Subtotal</span>

              <span>₹{subtotal}</span>

            </div>

            <div className="d-flex justify-content-between">

              <span>Delivery Charge</span>

              <span>₹{deliveryCharge}</span>

            </div>

          </div>

          <div className="d-flex justify-content-between mt-3">

            <h4>Total</h4>

            <h4>₹{totalAmount}</h4>

          </div>

          <hr />

          <h5>Delivery Address</h5>

          <textarea
            className="form-control mb-3"
            rows={3}
            placeholder="Enter Delivery Address"
            value={deliveryAddress}
            onChange={(e) => setDeliveryAddress(e.target.value)}
          />

          <h5>Select Payment Method</h5>

          {
            paymentMethods.map((method, index) => (

              <div className="form-check" key={index}>

                <input
                  className="form-check-input"
                  type="radio"
                  name="payment"
                  checked={paymentMethod === method}
                  onChange={() => setPaymentMethod(method)}
                />

                <label className="form-check-label">

                  {method}

                </label>

              </div>

            ))
          }

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
              fontWeight: "bold",
            }}
          >
            Place Order
          </Button>

        </Modal.Footer>

      </Modal>

      <OrderSuccess
        show={successModal}
        handleClose={() => setSuccessModal(false)}
      />
    </>
  );
};

export default Checkout;