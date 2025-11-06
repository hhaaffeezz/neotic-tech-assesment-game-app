import React from "react";
import { Star } from "lucide-react";
import { FaLessThan } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import heroimage from "../../assets/heroimage.png";
import Button from "../../components/Button";

const LoginHeroSection = () => {
  const navigate = useNavigate();

  return (
<div
  className="relative w-full max-w-[458px] h-[90vw] max-h-[470px] pt-6 px-4 sm:px-6 mx-auto bg-gradient-to-b rounded-b-full from-[#0072b5] to-[#004c7a]"
  style={{
    clipPath: "polygon(100% 0, 100% 30%, 400% 47%, 64% 88%, 25% 63%, 0 47%, 0 0)",
  }}
>

    
      <div className="absolute top-6 left-4 z-20">
        <Button variant="round" onClick={() => navigate("/")}>
          <FaLessThan />
        </Button>
      </div>

  
      <div className="absolute left-6 top-25 flex flex-col items-center w-28 space-y-3">
        <div className="flex justify-center space-x-1">
          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
        </div>
        <p className="text-white  text-sm font-medium tracking-wide">
          TOP RATED
        </p>
      </div>

      <div className="absolute right-14 bottom-26">
     <img
  src={heroimage}
  alt="Hero"
  className="w-[30vw] max-w-[150px] h-[56vw] max-h-[280px] object-contain"
/>
      </div>

    </div>
  );
};

export default LoginHeroSection;
