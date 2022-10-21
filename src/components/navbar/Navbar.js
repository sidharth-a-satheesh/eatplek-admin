import React from "react";
import "./navbar.scss";
import { useLocation } from "react-router-dom";
import logo from "../../assets/Logo-nav.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  let location = useLocation();
  // console.log(location.pathname);
  if (
    location.pathname === "/" ||
    location.pathname.substring(0, 8) === "/invoice" ||
    location.pathname === "/reset" ||
    location.pathname === "/forgot"
  ) {
    return null;
  }

  let onLogout = () => {
    if (localStorage.getItem("jwt_admin")) localStorage.removeItem("jwt_admin");
    navigate("/");
  };

  return (
    <div className="nav-main">
      <Link to="/home">
        <div className="nav-logo">
          <img src={logo} alt="logo" />
        </div>
      </Link>
      <div className="nav-items">
        <Link to="/home">
          <p>Home</p>
        </Link>
        <Link to="/orders">
          <p>Orders</p>
        </Link>
        <Link to="/revenue">
          <p>Revenue</p>
        </Link>
        <Link to="/decline">
          <p>Decline</p>
        </Link>
        <Link to="/messages">
          <p>Messages</p>
        </Link>
        <Link to="/feedback">
          <p>Feedback</p>
        </Link>
        <Link to="" onClick={onLogout}>
          <p>Logout</p>
        </Link>
      </div>
    </div>
  );
}
