import React from "react";
import { register } from "../Services/User";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    var name = e.target.name;
    var value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { password, cpassword } = user;

    register(user).then((data) => {
      if (data.data.message !== "User created successfully") {
        toast.warn(data.data.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } else if (password !== cpassword) {
        toast.warn("Password Does Not Match", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        return;
      } else {
        toast.success(data.data.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        navigate("/login");
      }
    });
  };

  return (
    <>
      <div className="form">
        <h3 className="title">
          Welcome Aboard! <br /> <span>Get Started</span>
        </h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="72"
          height="72"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zM6.023 15.416C7.491 17.606 9.695 19 12.16 19c2.464 0 4.669-1.393 6.136-3.584A8.968 8.968 0 0 0 12.16 13a8.968 8.968 0 0 0-6.137 2.416zM12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        </svg>
        <div className="content">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              id="name"
              name="name"
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <input
              className="input"
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              onChange={handleChange}
              required
            ></input>
          </div>
          <div>
            <input
              className="input"
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              onChange={handleChange}
              required
            ></input>
          </div>

          <div>
            <input
              className="input"
              type="password"
              placeholder="Confirm Password"
              id="cpassword"
              onChange={handleChange}
              name="cpassword"
              required
            ></input>
          </div>
          <div>
            <button type="submit" className="button2" onClick={handleLogin}>
              SIGN UP
            </button>
          </div>
          <p className="aha">
            Already have an account?{" "}
            <span>
              <a href="/login"> Sign In</a>
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup;