import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";
import Home from "./screens/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} exact/>
        <Route path="/login" element={<Login />} exact/>
        <Route path="/" element={<Home />} exact/>
      </Routes>
    </Router>
  );
};

export default App;
