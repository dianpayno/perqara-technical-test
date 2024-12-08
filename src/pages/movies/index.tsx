import ContainerMovieCard from "@/components/ContainerMovieCard";
import SortAndResult from "@/components/SortAndResult";
import { getTopHomepageMovies } from "@/lib/features/movieSlice";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const MovieLayoutPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopHomepageMovies());
  }, [dispatch]);

  return (
    <div className="max-w-[1680px] relative mx-auto">
      {/* Top Section */}
      <div className="bg-transparent min-h-[404px] absolute top-0  left-0 right-0"></div>
      <div className="bg-gray-900  absolute top-[320px] left-0  right-0 bottom-0">
       
      </div>
      <div className="max-w-[1500px] bg-transparent min-h-[900px] py-36 px-[50px] mx-auto z-50 ">
          <div className="mb-10 z-50">
            <div className="bg-[#E74C3C] h-[6px] w-[112px]"></div>
            <p className="text-[36px] text-white font-bold">Movies</p>
          </div>
          <div className="flex justify-start z-50 items-start gap-5">
            <SortAndResult />
            <ContainerMovieCard />
          </div>
        </div>
    </div>
  );
};

export default MovieLayoutPage;
