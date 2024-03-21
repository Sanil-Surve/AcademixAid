import './Navbar.css'; // Import your CSS file for styling
import mainlogo from "../assets/academixAid.jpg";

const Navbar = ({ user }) => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={mainlogo} alt="AcademixAid Logo" />
        <span className="navbar-brand">AcademixAid</span>
      </div>
      <div className="navbar-user">
        {user && <span className="user-greeting">Welcome, {user}</span>}
      </div>
    </div>
  );
};

export default Navbar;

