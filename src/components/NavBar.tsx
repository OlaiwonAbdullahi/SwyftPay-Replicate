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

        <div className="hidden md:flex flex-grow items-center justify-center space-x-4">
          <li className="list-none">
            <a href="#" className="text-slate-900 font">
              Product
            </a>
          </li>
          <li className="list-none">
            <a href="#" className="text-slate-900 font">
              Company
            </a>
          </li>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="text-slate-900 bg-white font">Sign in</button>
          <button className="bg-violet-600 text-white rounded-md w-24 h-9 pb-1 font">
            Sign up
          </button>
        </div>
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
