import React, { useState, useRef, useEffect } from "react";
import { IoGameControllerSharp } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../components/Button";
import { FaBars } from "react-icons/fa";
import UserMenu from "../components/UserMenu";

const Topbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const isLoggedIn = location.pathname.startsWith("/home");

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="text-white flex justify-between items-center h-14 px-4 sm:px-6 md:px-8 w-full max-w-[393px] sm:max-w-md md:max-w-lg mx-auto  bg-gray-900">
  {/* Logo */}
  <div className="flex items-center gap-2 sm:gap-3 md:gap-2">
    <IoGameControllerSharp className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-400" />
    <span className="text-sm sm:text-base md:text-lg font-bold">GAMEZONE</span>
  </div>

  {/* Right Side */}
  <div className="flex items-center">
    {!isLoggedIn ? (
      <div className="ml-4 md:ml-6"> {/* add margin-left to keep gap */}
        <Button variant="blue" size="lg" onClick={() => navigate("/login")}>
          JOIN NOW
        </Button>
      </div>
    ) : (
      <div className="relative ml-4 md:ml-6" ref={menuRef}>
        <FaBars
          className="w-6 h-6 sm:w-7 sm:h-7 cursor-pointer text-blue-400"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        {menuOpen && <UserMenu closeMenu={() => setMenuOpen(false)} />}
      </div>
    )}
  </div>
</div>

  );
};

export default Topbar;
