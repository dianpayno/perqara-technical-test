import { popularSort } from "@/data/navbar-menu";
import React, { useState } from "react";
import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";

const ButtonPopularity = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button 
      onClick={() => setIsOpen(!isOpen)}
      className="bg-gray-800 rounded-[5px] px-2 w-[202px] h-[36px] flex justify-between items-center">
        <span className="text-white text-[14px]">Popularity</span>
        {
            isOpen ? <BiSolidUpArrow color="white" size={10} /> : <BiSolidDownArrow color="white" size={10} />
        }
       
      </button>
      {isOpen && (
        <div className="w-[202px] h-[165px] bg-gray-900 mt-2 absolute">
          {popularSort.map((item: string, i: number) => {
            return (
              <button
                key={i}
                className="text-[14px] z-10 text-white px-1 mt-1 hover:bg-gray-700 w-full flex justify-start"
              >
                <span>{item}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ButtonPopularity;
