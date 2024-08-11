// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Support from "./pages/Support";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <nav className="bg-gray-800 text-white shadow-md">
          <div className="container mx-auto p-4 flex justify-between items-center">
            <h1 className="text-xl font-semibold">BusinessName</h1>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="hover:text-gray-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-gray-400">
                  Support
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/support" element={<Support />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>&copy; 2024 BusinessName. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
