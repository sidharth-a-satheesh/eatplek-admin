import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import './app.scss'
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Hotel from "./pages/hotel/Hotel";
import EditCategory from "./pages/hotel/EditCategory";
import Bill from "./components/bill/Bill";
import Order from "./pages/orders/Order";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/admin-login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/invoice" element={<Bill />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/edit-category" element={<EditCategory />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
