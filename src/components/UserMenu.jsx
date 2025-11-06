import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearUser } from "../store/authSlice";
import { clearSessionCookie } from "../utils/auth";

const UserMenu = ({ closeMenu }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    clearSessionCookie();
    dispatch(clearUser());
    navigate("/login");
    closeMenu(); 
  };

  return (
    <div className="absolute right-0 mt-2 w-40 sm:w-44 bg-gray-800 text-white rounded shadow-lg z-50">
      <button
        className="block w-full text-left px-4 py-2 hover:bg-blue-400 transition-colors"
        onClick={() => { navigate("/home"); closeMenu(); }}
      >
        Dashboard
      </button>
      <button
        className="block w-full text-left px-4 py-2 hover:bg-blue-400 transition-colors"
        onClick={() => { navigate("/profile"); closeMenu(); }}
      >
        Profile
      </button>
      <button
        className="block w-full text-left px-4 py-2 hover:bg-blue-400 transition-colors"
        onClick={() => { navigate("/settings"); closeMenu(); }}
      >
        Settings
      </button>
      <button
        className="block w-full text-left px-4 py-2 hover:bg-red-500 transition-colors"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
