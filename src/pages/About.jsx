import React from 'react';
import { FaUtensils, FaHeart, FaLeaf } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div
        className="h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="bg-black bg-opacity-60 p-6 rounded-xl text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">
            About TastyBites 🍽️
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Serving love, one recipe at a time. Discover our journey in making
            food unforgettable.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-10 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-semibold text-yellow-300 mb-4">🥘 Our Mission</h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          At TastyBites, our mission is simple: bring people closer to food that not only tastes great, but also tells a story. Whether you're a home cook or a food explorer, we're here to inspire you to cook, share, and enjoy every bite.
        </p>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-800 py-10 px-6 md:px-20">
        <h2 className="text-3xl font-semibold text-yellow-300 text-center mb-8">
          💡 Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-700 p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaUtensils className="text-4xl text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Authentic Recipes</h3>
            <p className="text-gray-400">
              Carefully curated and tested recipes that feel like home.
            </p>
          </div>

          <div className="bg-gray-700 p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaHeart className="text-4xl text-red-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Made With Love</h3>
            <p className="text-gray-400">
              Each recipe is shared with care and passion for food lovers.
            </p>
          </div>

          <div className="bg-gray-700 p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaLeaf className="text-4xl text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fresh & Healthy</h3>
            <p className="text-gray-400">
              Promoting meals that are not only delicious but nutritious too.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
