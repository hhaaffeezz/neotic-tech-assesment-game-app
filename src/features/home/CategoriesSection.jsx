import React from 'react'
import Button from '../../components/Button'
import { FaGreaterThan } from "react-icons/fa6"; 
import { FaLessThan } from "react-icons/fa6";

const CategoriesSection = () => {
  return (
    <div>
        <div className="w-full max-w-[692px] h-[76px] flex flex-col gap-5 ">
  
  <div className="flex items-center justify-between">
    <h2 className="text-white font-bold tracking-wide text-[18px]">
      CATEGORIES
    </h2>

    <div className="flex gap-2">
      <Button variant="round">
        <FaLessThan />
      </Button>
      <Button variant="round">
        <FaGreaterThan />
      </Button>
    </div>
  </div>


  <div className="flex flex-wrap gap-3">
    <Button variant="blue" size="md" className="text-[12px] font-light">
      Action
    </Button>
    <Button variant="blue" size="md" className="text-[12px] font-light">
      Sports
    </Button>
    <Button variant="blue" size="md" className="text-[12px] font-light">
      Racing
    </Button>
    <Button variant="blue" size="md" className="text-[12px] font-light">
      Puzzle
    </Button>
  </div>
</div>
    </div>
  )
}

export default CategoriesSection
