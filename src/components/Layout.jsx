import React from "react";
import Navbar from "./Navbar";
import "../App.css";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="app-container">
      <Navbar />
      <main className="body">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
