import React from 'react';
import Navbar from "../components/Landingpage/Navbar";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />

      <section className="flex flex-col items-center justify-center text-center px-6 py-24 text-white">
        <h1 className="text-5xl font-extrabold mb-6 text-green-400 drop-shadow-md">
          Welcome to NutriAI
        </h1>

        <p className="text-lg max-w-2xl text-gray-300 leading-relaxed">
          Your smart meal-planning assistant. Enter your details and NutriAI will
          generate a personalized one-day meal plan tailored to your goals,
          preferences, and nutrition needs.
          <br /><br />
          <span className="text-green-400 font-semibold">
            Sign in or Sign up to get started!
          </span>
        </p>
      </section>
    </div>
  );
};

export default LandingPage;
