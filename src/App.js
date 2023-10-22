import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QuoteOfTheDay from "./pages/QuoteOfTheDay";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quote-of-the-day" element={<QuoteOfTheDay />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
