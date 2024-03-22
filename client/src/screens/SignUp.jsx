import { useState } from "react";
import "../styles/SignUp.css";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: " ",
    lastName: " ",
    email: " ",
    password: " ",
  });

  const handleChange = (event) => {
    event.preventDefault();
    setUser((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(user);
    const response = await fetch(`http://localhost:8080/create-user`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(user), // body data type must match "Content-Type" header
    });
    const res = response.json();
    console.log(res);
    setUser({ firstName: " ", lastName: " ", email: " ", password: " " });
    navigate("/home");
  };

  return (
    <div className="registration">
      <div className="login-from">
        <div className="title">
          <h1>Register Here</h1>
        </div>
        <form action="">
          <label htmlFor="firstName">First Name </label>
          <input
            type="text"
            placeholder="Enter your First name"
            name="firstName"
            value={user.firstName}
            onChange={(event) => handleChange(event)}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            placeholder="Enter your Last name"
            name="lastName"
            value={user.lastName}
            onChange={(event) => handleChange(event)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter your Email"
            name="email"
            value={user.email}
            onChange={(event) => handleChange(event)}
          />
          <label htmlFor="password">password</label>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            id="password"
            value={user.password}
            onChange={(event) => handleChange(event)}
          />
          <button onClick={handleSubmit} type="submit">
            Register
          </button>
        </form>
        <p>
          If you already a user kindly <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
