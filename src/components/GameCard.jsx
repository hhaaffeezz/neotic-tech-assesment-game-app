import React from "react";
import Button from "../components/Button";
import { CgPlayButtonO } from "react-icons/cg";

export default function GameCard({
  image,
  alt = "Game Card",
  subtitle,
  title,
  buttonText,
  onClick = () => console.log("Card clicked!")
}) {
  return (
    <div className="bg-gray-900 text-white border border-amber-50 rounded-lg overflow-hidden flex flex-col md:w-72 w-full max-w-xs mx-auto">

      <div className="w-full">
        <img
          src={image}
          alt={alt}
          className="w-full h-64 sm:h-72 md:h-80 object-cover"
        />
      </div>

    
      <div className="flex flex-col items-center justify-center gap-2 p-4 text-center">
        {subtitle && (
          <p className="text-xs sm:text-sm font-light">{subtitle}</p>
        )}

        {title && (
          <p className="text-sm sm:text-base font-medium">
            {title}
          </p>
        )}

        {buttonText && (
          <Button
            onClick={onClick}
            className="mt-3 flex items-center gap-2"
          >
            {buttonText} <CgPlayButtonO />
          </Button>
        )}
      </div>
    </div>
  );
}
