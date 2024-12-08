/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

interface carouselProps {
  data: any;
  isActive: boolean;
}
const CarouselComponents = ({ data, isActive }: carouselProps) => {
  return (
    <div className={`${isActive ? 'h-[450px]':'h-[400px]'} relative w-full flex justify-center items-center`}>
     
      <div className="w-[542px] min-h-[365px] max-h-[365px]  flex justify-center items-center">
        {/* Poster */}
        <div className="min-w-[243px] max-w-[243px] min-h-[365px] relative max-h-[365px] overflow-hidden">
        {
          !isActive && (
            <div className="absolute top-0 left-0 right-0 bottom-0 text-white font-bold bg-black bg-opacity-80 "/>
          )
          }
          <Image src={data.Poster} width={243} height={365} alt="image" />
        </div>
        {/* Body detail */}
        <div className={`w-full h-[330px] relative bg-black my-3 p-5`}>
          {
          !isActive && (
            <div className="absolute top-0 left-0 right-0 bottom-0 text-white font-bold bg-black bg-opacity-80 "/>
          )
          }
          <div className="flex justify-start gap-2 mt-2items-center">
            <FaStar color="#ffd32c" size={20} />
            <span className="text-[15px] font-bold text-white">
              {data.imdbRating}
            </span>
          </div>
          <div className="flex justify-start gap-2 items-center">
            <span className="text-[28px] font-bold text-white">
              {data.Title}
            </span>
          </div>
          <div className="flex justify-start gap-1 items-center">
            <span className="text-[16px] text-white">{data.Year}</span>
            <GoDotFill color="s" size={15} />
            <span className="text-[12px] text-white">{data.Genre}</span>
          </div>
          <div>
            <p className="text-[14px] text-white mt-2">{data.Plot}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponents;
