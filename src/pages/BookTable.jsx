import { useState } from "react";

function BookTable() {
  const [booking, setBooking] = useState({
    date: "",
    guests: "",
    mealType: "",
    request: "",
  });

  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      booking.date &&
      booking.guests &&
      booking.mealType
    ) {
      setSuccess(true);

      setBooking({
        date: "",
        guests: "",
        mealType: "",
        request: "",
      });
    }
  };

  return (
    <div
      className="container-fluid p-0"
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="row g-0 min-vh-100"
        style={{
          backgroundColor: "rgba(0,0,0,0.75)",
        }}
      >

        {/* LEFT SECTION */}

        <div className="col-lg-6 d-flex align-items-center text-white">

          <div className="p-4 p-lg-5">

            <span className="badge bg-warning text-dark mb-3">
              TABLE RESERVATION
            </span>

            <h1 className="display-3 fw-bold">
              Secure Your Culinary Journey
            </h1>

            <p className="lead mt-4">
              Reserve your table today and enjoy an
              unforgettable dining experience with
              authentic flavours and premium service.
            </p>

            <div className="mt-4">

              <h5>📍 Location</h5>
              <p>MG Road, Kochi, Kerala</p>

              <h5>🕒 Opening Hours</h5>
              <p>11:00 AM - 11:00 PM</p>

            </div>

          </div>

        </div>

        {/* RIGHT SECTION */}

        <div className="col-lg-6 d-flex justify-content-center align-items-center">

          <div
            className="card shadow-lg border-0 w-100 mx-3"
            style={{
              maxWidth: "550px",
              borderRadius: "20px",
            }}
          >

            <div className="card-body p-4">

              <h2 className="text-center fw-bold mb-4">
                Book A Table
              </h2>

              {success && (
                <div className="alert alert-success">
                  Reservation Confirmed Successfully!
                </div>
              )}

              <form onSubmit={handleSubmit}>

                {/* DATE */}

                <div className="mb-3">
                  <label className="form-label">
                    Reservation Date
                  </label>

                  <input
                    type="date"
                    className="form-control"
                    value={booking.date}
                    onChange={(e) =>
                      setBooking({
                        ...booking,
                        date: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                {/* GUESTS */}

                <div className="mb-3">

                  <label className="form-label">
                    Number of Guests
                  </label>

                  <select
                    className="form-select"
                    value={booking.guests}
                    onChange={(e) =>
                      setBooking({
                        ...booking,
                        guests: e.target.value,
                      })
                    }
                    required
                  >
                    <option value="">
                      Select Guests
                    </option>

                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6+</option>

                  </select>

                </div>

                {/* MEAL TYPE */}

                <div className="mb-3">

                  <label className="form-label">
                    Preferred Slot
                  </label>

                  <div className="d-flex gap-4">

                    <div className="form-check">

                      <input
                        type="radio"
                        className="form-check-input"
                        name="mealType"
                        value="Lunch"
                        checked={
                          booking.mealType ===
                          "Lunch"
                        }
                        onChange={(e) =>
                          setBooking({
                            ...booking,
                            mealType:
                              e.target.value,
                          })
                        }
                      />

                      <label className="form-check-label">
                        Lunch
                      </label>

                    </div>

                    <div className="form-check">

                      <input
                        type="radio"
                        className="form-check-input"
                        name="mealType"
                        value="Dinner"
                        checked={
                          booking.mealType ===
                          "Dinner"
                        }
                        onChange={(e) =>
                          setBooking({
                            ...booking,
                            mealType:
                              e.target.value,
                          })
                        }
                      />

                      <label className="form-check-label">
                        Dinner
                      </label>

                    </div>

                  </div>

                </div>

                {/* SPECIAL REQUEST */}

                <div className="mb-4">

                  <label className="form-label">
                    Special Requests
                  </label>

                  <textarea
                    rows="4"
                    className="form-control"
                    placeholder="Any special requirements..."
                    value={booking.request}
                    onChange={(e) =>
                      setBooking({
                        ...booking,
                        request:
                          e.target.value,
                      })
                    }
                  ></textarea>

                </div>

                <button
                  className="btn btn-warning w-100 fw-bold py-3 text-white"
                  type="submit"
                >
                  Confirm Reservation
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default BookTable;