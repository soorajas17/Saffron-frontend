import React from 'react'
import { Modal, Button } from 'react-bootstrap'


const OfferModal = ({ show, handleClose }) => {
  return (
    <div>
          <Modal
      show={show}
      onHide={handleClose}
      centered
      size="lg"
    >
      <Modal.Body className="p-0">

        <div className="row g-0">

          {/* Left Column */}
          <div className="col-md-5">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
              alt="Offer"
              className="img-fluid h-100"
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Right Column */}
          <div className="col-md-7 p-4 position-relative">

            <button
              className="btn-close position-absolute top-0 end-0 m-3"
              onClick={handleClose}
            ></button>

            <h2 className="fw-bold text-warning">
              LIMITED TIME OFFER
            </h2>

            <p className="text-muted">
              Get 20% OFF on your next order!
            </p>

            <div className="bg-light p-3 rounded text-center my-4">
              <h3 className="fw-bold text-danger">
                FOOD20
              </h3>
            </div>

            <p>
              Use this code at checkout and enjoy delicious
              food at a discounted price.
            </p>

            <Button
              variant="warning"
              size="lg"
              className="w-100"
            >
              Order Now
            </Button>

          </div>

        </div>

      </Modal.Body>
    </Modal>
    </div>
  )
}

export default OfferModal