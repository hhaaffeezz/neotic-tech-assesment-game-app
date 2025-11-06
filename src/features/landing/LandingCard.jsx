import React from "react";
import { BiSolidDownload } from "react-icons/bi";
import Button from "../../components/Button";



const LandingCard = ({image,title}) => {
  return (

 <div className="w-[167px] h-[181px] rounded-lg overflow-hidden shadow-sm flex flex-col">
  <div className="relative w-full flex-1">
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover"
    />

    <div className="absolute bottom-0 w-full px-2 py-1 flex flex-col gap-1 bg-black/30 backdrop-blur-sm">
   
      <h3 className="text-[14px] font-normal text-white text-left">{title}</h3>

      <div className="w-full flex justify-center">
        <Button variant="transparent" size="md" className="gap-1">
  DOWNLOAD <BiSolidDownload />
</Button>

      </div>
    </div>
  </div>
</div>

  );
};

export default LandingCard;
