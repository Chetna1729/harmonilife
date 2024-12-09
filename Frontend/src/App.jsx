import React from "react";
import Offerings from "./Components/Offerings";
import Plans from "./Components/Plan";
import logo from "./assets/Harmonilifelogo.webp";

const App = () => {
  return (
    <div className="bg-gray-50">
      {/* Navbar Section */}
      <nav className="bg-white shadow-md py-4 px-8">
        <div className="flex items-center justify-between">
          <img
            src={logo} // Replace with your logo URL
            alt="Harmoni Life Logo"
            className="h-10"
          />
          <ul className="flex space-x-8 text-gray-800 font-semibold">
            <li><a href="#hero" className="hover:text-blue-600">Home</a></li>
            <li><a href="#offerings" className="hover:text-blue-600">Offerings</a></li>
            <li><a href="#plans" className="hover:text-blue-600">Our Plans</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="hero" className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Harmoni Life</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Empowering your health and wellness journey with personalized services, accessible anytime, anywhere.
        </p>
      </header>

      {/* Offerings Section */}
      <Offerings />

      {/* Our Plans Section */}
      <Plans />

      {/* Footer Section */}
      <footer id="contact" className="bg-blue-600 text-white py-8 text-center">
        <p className="text-sm">© 2024 Harmoni Life. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
