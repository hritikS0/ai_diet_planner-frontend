import React, { useState } from "react";
import axios from "../utils/api.js";
import toast, { LoaderIcon } from "react-hot-toast";
import { Navvbar } from "../components/Navvbar.jsx";

const Dashboard = () => {
  const [formData, setFormData] = useState({
    age: "",
    height: "",
    weight: "",
    goal: "",
    dietType: "",
    ingredients: "",
    gender: "",
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const res = await axios.post("/api/diet/generate", formData);
      console.log("API Response:", res.data);

      const dietData = res.data?.diet?.raw
        ? JSON.parse(res.data.diet.raw)
        : res.data.diet;

      setResult(dietData);

      // Smooth scroll to bottom when result appears
      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      }, 300);
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch diet plan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className={`min-h-screen pt-4  px-4 flex items-start justify-center 
        ${result || loading ? "overflow-auto" : "overflow-hidden"} 
        bg-gray-50 dark:bg-gray-900`}
      >
        <div className="w-full max-w-3xl p-10 bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
          <Navvbar />

          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Fill in your details to get an AI-powered personalized meal plan.
          </p>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Age
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
                placeholder="Enter your age"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Height (cm)
              </label>
              <input
                type="number"
                name="height"
                value={formData.height}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
                placeholder="Enter your height in cm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Weight (kg)
              </label>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
                placeholder="Enter your weight in kg"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Goal
              </label>
              <select
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
                required
              >
                <option value="">Select goal</option>
                <option value="Weight Loss">Weight Loss</option>
                <option value="Muscle Gain">Muscle Gain</option>
                <option value="Maintenance">Maintenance</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Diet Preference
              </label>
              <select
                name="dietType"
                value={formData.dietType}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
                required
              >
                <option value="">Choose preference</option>
                <option value="Veg">Veg</option>
                <option value="Non-Veg">Non-Veg</option>
                <option value="Keto">Keto</option>
                <option value="Vegan">Vegan</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Ingredients / Budget / Allergies
              </label>
              <textarea
                name="ingredients"
                value={formData.ingredients}
                onChange={handleChange}
                className="w-full p-4 border rounded-lg dark:bg-gray-700 dark:text-white"
                rows="4"
                placeholder="Example: ₹2000/week budget, avoid peanuts, prefer eggs..."
              ></textarea>
            </div>

            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-medium"
              >
                Generate AI Meal Plan
              </button>
            </div>
          </form>

          {/* Loading State */}
          {loading ? (
            <div className="flex flex-col items-center justify-center my-6">
              <LoaderIcon className="w-24 h-24 animate-spin text-green-500" />
              <p className="mt-4 text-lg text-green-600 dark:text-green-400 font-medium">
                Generating Your Personalized Meal Plan...
              </p>
            </div>
          ) : (
            result && (
              <div className="mt-6 p-6 bg-white text-gray-900 dark:bg-gray-800 dark:text-white text-lg rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-green-600 mb-4">
                  Your Personalized Diet Plan
                </h3>

                <div className="mb-4">
                  <strong>Calories:</strong> {result.calories ?? "N/A"}
                </div>

                <div className="mb-4">
                  <strong>Macros:</strong>
                  <ul className="ml-4 list-disc">
                    <li>Protein: {result.macros?.protein ?? "N/A"}</li>
                    <li>Carbs: {result.macros?.carbs ?? "N/A"}</li>
                    <li>Fats: {result.macros?.fats ?? "N/A"}</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <strong>Meals:</strong>
                  <ul className="ml-4 list-disc">
                    <li>
                      <strong>Breakfast:</strong>{" "}
                      {result.meals?.breakfast ?? "N/A"}
                    </li>
                    <li>
                      <strong>Lunch:</strong> {result.meals?.lunch ?? "N/A"}
                    </li>
                    <li>
                      <strong>Dinner:</strong> {result.meals?.dinner ?? "N/A"}
                    </li>
                    <li>
                      <strong>Snacks:</strong> {result.meals?.snacks ?? "N/A"}
                    </li>
                  </ul>
                </div>

                <div>
                  <strong>Tip:</strong> {result.tip ?? "N/A"}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
