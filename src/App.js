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
import Decline from "./pages/decline/Decline";
import Revenue from "./pages/revenue/Revenue";
import ForgotPass from "./pages/login/ForgotPass";
import ResetPass from "./pages/login/ResetPass";
import Messages from "./pages/messages/Messages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/invoice" element={<Bill />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/decline" element={<Decline />} />
          <Route path="/revenue" element={<Revenue />} />
          <Route path="/edit-category" element={<EditCategory />} />
          <Route path="/forgot" element={<ForgotPass />} />
          <Route path="/reset" element={<ResetPass />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
