import React from "react";
import LandingCard from "./LandingCard";
import img7 from "../../assets/img7.png";
import img8 from "../../assets/img8.png";
import img9 from "../../assets/img9.png";
import img10 from "../../assets/img10.png";
import img11 from "../../assets/img11.png";
import img12 from "../../assets/img12.png";
import img13 from "../../assets/img13.png";
import img14 from "../../assets/img14.png";

const gameCategories = {
  ACTION: [
    { title: "Empire War", image: img7 },
    { title: "Desert Tank", image: img8 },
  ],
  STRATEGY: [
    { title: "Tech Defense", image: img9 },
    { title: "City Empire", image: img10 },
  ],
  RACING: [
    { title: "Drag Racer", image: img11 },
    { title: "Turbo Drift", image: img12 },
  ],
  SHOOTING: [
    { title: "Sniper Squad", image: img13 },
    { title: "Space Blaster", image: img14 },
  ],
};

const LandingGamesSection = () => {
  return (
    <div className="max-w-[960px] mx-auto px-4 flex flex-col gap-8">
      {Object.entries(gameCategories).map(([category, games]) => (
        <div key={category} className="flex flex-col items-center">
      
          <h2 className="text-[18px] font-medium text-white mb-4 text-center">
            {category}
          </h2>

       
          <div className="flex justify-center font-lemon gap-[18px] w-full max-w-[342px]">
            {games.map((game, index) => (
              <LandingCard key={index} {...game} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LandingGamesSection;
