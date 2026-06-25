import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Checkout from "../components/Checkout";

function MyOrders() {

  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <div className="container py-5">

      <div className="text-center mb-5">
        <h1 className="fw-bold">My Orders</h1>
        <p className="text-muted">
          Review your previous orders and current cart
        </p>
      </div>

      <div className="row">

        {/* Order History */}
        <div className="col-lg-7 mb-4">

          <div className="card shadow-sm mb-3">
            <div className="card-body">

              <h5>Butter Chicken Combo</h5>

              <p className="text-muted">
                Order #ORD001
              </p>

              <span className="badge bg-success">
                Delivered
              </span>

              <p className="mt-3">
                20 June 2026
              </p>

              <Button variant="warning">
                Reorder
              </Button>

            </div>
          </div>

          <div className="card shadow-sm">
            <div className="card-body">

              <h5>Tandoori Platter</h5>

              <p className="text-muted">
                Order #ORD002
              </p>

              <span className="badge bg-primary">
                Processing
              </span>

              <div className="mt-3">
                <Button variant="dark">
                  Track Order
                </Button>
              </div>

            </div>
          </div>

        </div>

        {/* Active Cart */}
        <div className="col-lg-5">

          <div className="card shadow">

            <div className="card-body">

              <h4 className="fw-bold">
                Active Cart
              </h4>

              <hr />

              <div className="d-flex justify-content-between">
                <span>Butter Chicken x2</span>
                <span>₹560</span>
              </div>

              <div className="d-flex justify-content-between">
                <span>Garlic Naan x4</span>
                <span>₹240</span>
              </div>

              <div className="d-flex justify-content-between">
                <span>Paneer Tikka x1</span>
                <span>₹320</span>
              </div>

              <hr />

              <div className="d-flex justify-content-between fw-bold">
                <span>Subtotal</span>
                <span>₹1120</span>
              </div>

              <button
                className="btn btn-warning w-100 mt-3"
                onClick={() => setShowCheckout(true)}
              >
                Proceed To Checkout
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* Recommended */}
      <div className="mt-5">

        <h3 className="fw-bold mb-4">
          Recommended For You
        </h3>

        <div className="row">

          {[
            "Paneer Tikka",
            "Biryani",
            "Ice Cream",
            "Gulab Jamun"
          ].map((item) => (

            <div
              key={item}
              className="col-md-3 mb-3"
            >
              <div className="card h-100 shadow-sm">

                <img
                  src="https://picsum.photos/300/200"
                  className="card-img-top"
                  alt=""
                />

                <div className="card-body text-center">

                  <h6>{item}</h6>

                  <button className="btn btn-warning btn-sm">
                    Add
                  </button>

                </div>

              </div>
            </div>

          ))}

        </div>

      </div>

      {/* Checkout Modal */}
      <Checkout
        show={showCheckout}
        handleClose={() => setShowCheckout(false)}
      />

    </div>
  );
}

export default MyOrders;