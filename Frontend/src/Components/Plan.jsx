import React from "react";

const plans = [
  { name: "Basic Plan", price: "$10/month", features: ["Access to Telemedicine", "Basic Wellness Centers"] },
  { name: "Pro Plan", price: "$25/month", features: ["Medical Tests", "Sports & Fitness Centers"] },
  { name: "Premium Plan", price: "$50/month", features: ["All Features", "Priority Support"] },
];

const Plans = () => {
  return (
    <div className="py-12 bg-gradient-to-b from-gray-50 to-gray-100">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Plans</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            <h3 className="text-xl font-bold text-gray-700 text-center">{plan.name}</h3>
            <p className="text-center text-blue-500 text-2xl mt-2">{plan.price}</p>
            <ul className="mt-4 space-y-2">
              {plan.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="text-gray-600 flex items-center gap-2"
                >
                  <span className="text-blue-500 font-bold">✔</span>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-6 text-center">
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
