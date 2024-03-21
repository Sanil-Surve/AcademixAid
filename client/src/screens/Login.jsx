import "../styles/Login.css";

const Login = () => {

  return (
    <div className="container">
      <div className="login-container">
        <form className="login-form" >
          <h2>Login</h2>
          <div className="input-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
