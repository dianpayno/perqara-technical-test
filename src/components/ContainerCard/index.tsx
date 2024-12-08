/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import ActionButton from "../Button/ActionButton";
import MovieCard from "../MovieCard";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

const actionButton = ["Popularity", "Release Date"];

const ContainerCard = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const { topHomepageMoviesList, windowWidth } = useSelector(
    (state: RootState) => state.movies
  );
  return (
    <div className={`min-h-[982px] w-full flex justify-start pt-20  bg-transparent z-30 ${windowWidth > 1400 ? "px-[230px]" : "px-[50px]"} min-w-[600px] relative items-start flex-col mx-auto`}>
      <div className="flex justify-between items-center mb-5 w-full">
        <div>
          <div
            className="w-[112px] h-[6px] bg-[#E74C3C]
"
          ></div>
          <p className="text-white font-bold mt-2 text-[24px]">
            Discover Movies
          </p>
        </div>
        <div className="flex justify-start items-center  gap-2">
          {actionButton.map((item: string, index: number) => {
            return (
              <ActionButton
                handleClick={() => setSelectedItem(index)}
                isActive={selectedItem === index}
                key={index}
                label={item}
              />
            );
          })}
        </div>
      </div>

      {/* Card */}

      <div className="flex justify-start gap-6 items-start flex-wrap">
        {topHomepageMoviesList?.data.map((item: any) => {
          return <MovieCard key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
};

export default ContainerCard;
