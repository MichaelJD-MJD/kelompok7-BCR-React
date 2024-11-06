import { createLazyFileRoute, Link } from '@tanstack/react-router'
import bannerImg from "../assets/login.png";
import logo from "../assets/icon/logo.png";
import "../styles/login.css";

export const Route = createLazyFileRoute('/register')({
  component: Register,
})

function Register() {
  return (
    <div className="container-fluid login-container">
      <div className="row">
        {/* Image */}
        <div className="col-lg-8 img-container">
          <img src={bannerImg} alt="Login Illustration" />
        </div>
        {/* Form */}
        <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center">
          <div className="container">
            <div className="row">
              <div className="col">
                <img src={logo} alt="Logo" />
              </div>
            </div>
            <div className="row mt-4">
              <h3>Welcome, Sign Up to BCR</h3>
              {/* Form */}
              <form className="mt-3">
                <div className="mb-3">
                  <label htmlFor="inputName" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    aria-describedby="nameHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputEmail" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputPassword" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary login-btn d-inline-block"
                >
                  Sign Up
                </button>
              </form>
              <p className="mt-2 text-center">
                Already have an account? <Link to={"/login"}>Sign In here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
