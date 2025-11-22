import { useState } from "react";
import axios from "../utils/api.js";
import toast from "react-hot-toast";
import { useNavigate,Link } from "react-router-dom";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log;
    try {
      const res = await axios.post(
        "/api/auth/register",
        { name, email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      setName("");
      setEmail("");
      setPassword("");
      toast.success("User Created Successfully");
      console.log(res.data.message);
      navigate("/login");
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-green-600 dark:text-green-400 text-center mb-6">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-green-500 dark:bg-gray-700 dark:text-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-green-500 dark:bg-gray-700 dark:text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-green-500 dark:bg-gray-700 dark:text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-lg"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
          Already have an account?{" "}
          <Link className="text-green-600 dark:text-green-400" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
