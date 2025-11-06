import React from 'react'
import Button from '../../components/Button';
import { AiOutlineHeart, AiFillStar, AiOutlineStar } from "react-icons/ai";

const GamesListCard = ({ image, title, stars }) => {
  return (
    <div className="w-full h-[70px] bg-[#0B2433] text-white flex items-center px-3 rounded-lg">

  
      <img
        src={image}
        className="w-12 h-12 object-cover rounded"
        alt={title}
      />

  
      <div className="w-3" />

 
      <div className="flex justify-between w-full">

      
        <div className="flex flex-col justify-center">
          <h2 className="text-[12px] font-bold leading-tight uppercase">
            {title}
          </h2>

          <div className="flex gap-0.5 mt-0.5">
            {[...Array(5)].map((_, index) =>
              index < stars ? (
                <AiFillStar key={index} className="text-yellow-400 w-3 h-3" />
              ) : (
                <AiOutlineStar key={index} className="text-yellow-400 w-3 h-3" />
              )
            )}
          </div>
        </div>

       
        <div className="flex flex-col items-end justify-center min-w-[110px]">
          <Button variant="transparent" size="sm" className="px-2! py-0.5! text-[10px]">
            PLAY
          </Button>

          <button className="flex items-center gap-0.5 text-sm opacity-90 hover:opacity-100 whitespace-nowrap mt-[3px]">
            <AiOutlineHeart className="w-3 h-3" />
            <span>ADD TO FAVOURITE</span>
          </button>
        </div>

      </div>
    </div>
  )
}

export default GamesListCard
