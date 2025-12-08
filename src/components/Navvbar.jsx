import { Navbar, NavbarBrand, NavbarToggle } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";

export function Navvbar() {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <Navbar fluid className=" py-3 pb-10 bg-white  dark:bg-gray-800">
      <span className="self-center text-2xl font-bold text-green-600 dark:text-green-400">
        NutriAI
      </span>

      <button
        onClick={logOut}
        className="text-gray-700 cursor-pointer border px-2 py-1 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
      >
        Logout
      </button>
    </Navbar>
  );
}
