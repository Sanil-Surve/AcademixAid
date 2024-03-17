import "../styles/SignUp.css";

const SignUp = () => {
    return (
        <div className="container__body">
            <div className="container">
                <div className="register-container">
                    <form className="register-form">
                        <h2>Register</h2><br/>
                        <div className="input-group">
                            <label htmlFor="fullname">Full Name:</label>
                            <input type="text" id="fullname" name="fullname" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="username">Username:</label>
                            <input type="text" id="username" name="username" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" required />
                        </div>
                        <button type="submit">Register</button>
                    </form><br />
                    <button className="login-button">Go to Login</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
