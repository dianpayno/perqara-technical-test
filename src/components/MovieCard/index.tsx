/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import ActionButton from "../Button/ActionButton";
import { useRouter } from "next/router";

interface CardInterface {
  data: any;
}
const MovieCard = ({ data }: CardInterface) => {
  const [onHover, setOnHover] = useState(false);
  const router = useRouter();
  const handleNavigateToDetail = () => {
    router.push(`/movies/details/${data.imdbID}`);
  };
  return (
    <div
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      className={`min-w-[220px] max-w-[220px] min-h-[383px] max-h-[383px] relative `}
    >
      <div className="w-[48px] h-[32px] text-white font-bold bg-black bg-opacity-50 absolute top-0 right-0 flex justify-center items-center">
        5.3
      </div>
      <div className="min-w-[220px] max-w-[220px] min-h-[330px] max-h-[330px] overflow-hidden">
        <Image src={data.Poster} width={220} height={330} alt="image" />
      </div>
      <div className="mt-1 text-white flex flex-col">
        <span className="text-[16px] font-bold ">{data.Title}</span>
        <span className="text-[14px]">{data.Year}</span>
      </div>

      {onHover ? (
        <div className="flex flex-col absolute top-0 left-0 right-0 bottom-0 justify-center bg-black bg-opacity-70 gap-8 items-center">
          <div className="flex gap-2 items-center">
            <FaStar color="#ffd32c" size={20} />
            <span className="text-[24px] font-bold text-white">5.0</span>
          </div>
          <p className="text-[18px] font-bold text-white capitalize">
            {data.Type}
          </p>
          <ActionButton
            label="View"
            isActive={true}
            handleClick={handleNavigateToDetail}
          />
        </div>
      ) : null}
    </div>
  );
};

export default MovieCard;
