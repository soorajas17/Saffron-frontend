import { useState } from "react";
import { Link} from "react-router-dom";
import {
  FaGoogle,
  FaFacebookF,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

function Auth({ isRegister }) {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let newErrors = {};

    if (isRegister && !formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.phone.trim() && isRegister) {
      newErrors.phone = "Phone Number is required";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password =
        "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSuccess(
        isRegister
          ? "Account Created Successfully!"
          : "Login Successful!"
      );

      console.log(formData);
    }
  };

  return (
    <div className="container-fluid p-0">
      <div className="row g-0 min-vh-100">

        {/* LEFT SECTION */}

        <div
          className="col-12 col-lg-6 text-white d-flex align-items-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "50vh",
          }}
        >
          <div
            className="w-100 h-100 d-flex align-items-center"
            style={{
              backgroundColor: "rgba(0,0,0,0.65)",
            }}
          >
            <div className="container p-4 p-lg-5">

              <h1 className="display-4 fw-bold text-warning">
                Saffron & Spice
              </h1>

              <p className="lead">
                Premium Restaurant Experience
              </p>

              <h2 className="fw-bold mt-5">
                Begin Your Journey
              </h2>

              <p className="fs-5 mt-3">
                Discover authentic flavours,
                reserve tables, track orders
                and enjoy a premium dining
                experience.
              </p>

            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}

        <div className="col-12 col-lg-6 bg-dark text-white d-flex justify-content-center align-items-center">

          <div
            className="w-100 p-4"
            style={{ maxWidth: "550px" }}
          >

            <div className="text-center mb-4">

              <h2 className="fw-bold">
                {isRegister
                  ? "Create Account"
                  : "Welcome Back"}
              </h2>

              <p className="text-secondary">
                {isRegister
                  ? "Join our restaurant family today"
                  : "Login to continue"}
              </p>

            </div>

            {/* SOCIAL LOGIN */}

            <button className="btn btn-light w-100 mb-3 py-2">
              <FaGoogle className="me-2 text-danger" />
              Continue with Google
            </button>

            <button className="btn btn-primary w-100 mb-4 py-2">
              <FaFacebookF className="me-2" />
              Continue with Facebook
            </button>

            <div className="d-flex align-items-center mb-4">
              <hr className="flex-grow-1" />
              <span className="mx-3">OR</span>
              <hr className="flex-grow-1" />
            </div>

            {success && (
              <div className="alert alert-success">
                {success}
              </div>
            )}

            <form onSubmit={handleSubmit}>

              {isRegister && (
                <div className="mb-3">
                  <input
                    type="text"
                    name="fullName"
                    className="form-control form-control-lg"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                  />

                  {errors.fullName && (
                    <small className="text-danger">
                      {errors.fullName}
                    </small>
                  )}
                </div>
              )}

              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control form-control-lg"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />

                {errors.email && (
                  <small className="text-danger">
                    {errors.email}
                  </small>
                )}
              </div>

              {isRegister && (
                <div className="mb-3">
                  <input
                    type="tel"
                    name="phone"
                    className="form-control form-control-lg"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />

                  {errors.phone && (
                    <small className="text-danger">
                      {errors.phone}
                    </small>
                  )}
                </div>
              )}

              <div className="mb-3">

                <div className="input-group input-group-lg">

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                  />

                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() =>
                      setShowPassword(
                        !showPassword
                      )
                    }
                  >
                    {showPassword ? (
                      <FaEyeSlash />
                    ) : (
                      <FaEye />
                    )}
                  </button>

                </div>

                {errors.password && (
                  <small className="text-danger">
                    {errors.password}
                  </small>
                )}

              </div>

              {isRegister && (
                <div className="form-check mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                  />

                  <label className="form-check-label">
                    I agree to Terms &
                    Conditions
                  </label>
                </div>
              )}

              <button
                className="btn btn-warning text-white fw-bold w-100 py-3"
                type="submit"
              >
                {isRegister
                  ? "CREATE ACCOUNT"
                  : "SIGN IN"}
              </button>

            </form>

            <div className="text-center mt-4">

              {isRegister ? (
                <>
                  Already have an account?

                  <Link
                    to="/login"
                    className="text-warning text-decoration-none ms-2 fw-bold"
                  >
                    Sign In
                  </Link>
                </>
              ) : (
                <>
                  Don't have an account?

                  <Link
                    to="/register"
                    className="text-warning text-decoration-none ms-2 fw-bold"
                  >
                    Create Account
                  </Link>
                </>
              )}

            </div>

            <div className="text-center mt-3">

              <a
                href="#"
                className="text-warning text-decoration-none me-3"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-warning text-decoration-none"
              >
                Terms of Service
              </a>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Auth;