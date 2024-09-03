import { useState } from "react";
import logo from "../assets/logo.png";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-white p-4">
      <div className="flex item-center justify-between">
        <div className="">
          <img src={logo} alt="logo" className="h-16 w-24"></img>
        </div>

        <div className="md:hidden mt-4">
          <button className="text-gray-500" onClick={toggleMenu}>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <ul className="hidden md:flex space-x-4">
          <li>
            <a href="#" className="text-slate-900">
              Product
            </a>
          </li>
          <li>
            <a href="#" className="text-slate-900">
              Company
            </a>
          </li>
        </ul>
      </div>

      {isOpen ? (
        <ul className="flex-col md:hidden items-center mx-a ">
          <li className="py-2">
            <a href="#" className="text-slate-900">
              Product
            </a>
          </li>
          <button className="bg-violet-600 text-white rounded-md w-4/5 h-9 ml-14">
            Get Started
          </button>
        </ul>
      ) : null}
    </nav>
  );
}
