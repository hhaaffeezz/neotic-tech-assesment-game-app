import React from "react";
import { useLocation } from "react-router-dom";
import { FaHome, FaGamepad, FaDownload, FaHeart } from "react-icons/fa";

const Footer = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  
  const hoverBlue = "hover:text-[#0096E0] transition-colors";

  return (
    <>
      {isLandingPage ? (
        
        <div className="w-full max-w-[393px] border-t border-white flex flex-col items-center justify-center text-white leading-tight font-['Wild_Wrld'] font-bold text-[14px] mx-auto text-center tracking-wide py-4 px-2">
          <span>
            <span className="text-[16px]">C</span>OPYRIGHT @2025.{" "}
            <span className="text-[16px]">A</span>LL RIGHTS
          </span>
          <span>
            <span className="text-[16px]">R</span>ESERVED BY{" "}
            <span className="text-[16px]">G</span>AMEZONE
          </span>
        </div>
      ) : (
      
        <footer className="relative w-full max-w-[393px] mx-auto bg-[#113f58]/90 rounded-t-2xl flex justify-between items-end pb-2 pt-6 sm:pt-8 px-4">
         
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#113f58]/90 text-white font-semibold text-lg px-3 py-2 rounded transform rotate-45 flex items-center justify-center w-12 h-12 border border-white/30">
            <span className="-rotate-45">AI</span>
          </div>

      
          <button className={`flex flex-col items-center text-white ${hoverBlue}`}>
            <FaHome className="text-lg mb-1" />
            <span className="text-[12px] font-normal">HOME</span>
          </button>

          <button className={`flex flex-col items-center text-white ${hoverBlue}`}>
            <FaGamepad className="text-lg mb-1" />
            <span className="text-[12px] font-normal">ALL GAMES</span>
          </button>

          <button className={`flex flex-col items-center text-white ${hoverBlue}`}>
            <FaDownload className="text-lg mb-1" />
            <span className="text-[12px] font-normal">DOWNLOAD</span>
          </button>

          <button className={`flex flex-col items-center text-white ${hoverBlue}`}>
            <FaHeart className="text-lg mb-1" />
            <span className="text-[12px] font-normal">FAVORITE</span>
          </button>
        </footer>
      )}
    </>
  );
};

export default Footer;
