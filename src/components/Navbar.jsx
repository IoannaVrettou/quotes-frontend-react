import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-slate-900 h-20 shadow-2xl">
      <div className="logo">
        <Link to="/">
          <h1 className="text-violet-100 ml-4 cursor-pointer text-2xl">
            My Quotes
          </h1>
        </Link>
      </div>
      <ul className="flex">
        <li></li>
        <li>
          <Link
            className="text-violet-100 mr-4 bg-indigo-700 font-medium pt-4 p-4 pr-5 pl-5 hover:bg-indigo-600 transition-all rounded"
            to="/quote-of-the-day"
          >
            <i className="fas fa-question"></i> Quote Of The Day
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
