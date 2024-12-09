import React from "react";

const offerings = [
  { title: "Telemedicine Consultations", description: "Access expert doctors anytime, anywhere." },
  { title: "Wellness Centers", description: "Relax and rejuvenate with specialized services." },
  { title: "Medical Tests", description: "Comprehensive health diagnostics at your convenience." },
  { title: "Sports and Fitness Centers", description: "Stay active and fit with access to top facilities." },
];

const Offerings = () => {
  return (
    <div className="py-12 bg-gradient-to-b from-blue-50 to-blue-100">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Offerings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
        {offerings.map((offering, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex justify-center mb-4">
              <div className="h-16 w-16 bg-blue-200 rounded-full flex items-center justify-center text-blue-800 font-bold text-xl">
                {offering.title[0]}
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-700">{offering.title}</h3>
            <p className="text-gray-600 mt-2">{offering.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offerings;
