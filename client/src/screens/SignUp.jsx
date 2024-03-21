import { useState } from "react";
import "../styles/SignUp.css";

function SignUp() {
  const [user, setUser] = useState({
    fname: " ",
    lname: " ",
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
  };

  return (
    <div className="registration">
      <div className="login-from">
        <div className="title">
          <h1>Registration Page</h1>
        </div>
        <form action="">
          <label htmlFor="fname">First Name </label>
          <input
            type="text"
            placeholder="Enter your First name"
            name="fname"
            value={user.fname}
            onChange={(event) => handleChange(event)}
          />
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            placeholder="Enter your Last name"
            name="lname"
            value={user.lname}
            onChange={(event) => handleChange(event)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
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
          <button onClick={handleSubmit} type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
