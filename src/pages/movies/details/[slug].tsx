/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";

import { FaStar } from "react-icons/fa";
import ReviewMovies from "@/components/ReviewsMovie";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getDetailMovieData, getTopThreeMovies } from "@/lib/features/movieSlice";
import { RootState } from "@/lib/store";
import MovieCard from "@/components/MovieCard";

const MovieDetails = () => {
  const router = useRouter();
  const { slug } = router.query as { slug: string };
  const dispatch = useDispatch();
  const {detailMovieData, topThreeMovies} = useSelector((state:RootState) => state.movies)

 

  useEffect(() => {
    if (slug) {
      dispatch(getDetailMovieData({ id: slug }));
      dispatch(getTopThreeMovies())
    }
  }, [slug, dispatch]);
  return (
    <div className="w-full bg-gray-700">
      <div
        style={{
          backgroundImage: `url(${detailMovieData?.data?.Poster})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="min-h-[500px] max-h-[500px] relative max-w-[1680px] mx-auto"
      >
        {/* Overlay */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50"></div>

        <div className="absolute bottom-0 left-0 right-0 flex justify-start ps-[435px] gap-4 items-center h-[80px] text-white bg-black bg-opacity-70">
          <div className="flex justify-start items-center gap-3">
            <FaStar color="#ffd32c" size={30} />
            <span className="text-[36px] font-bold text-white">{detailMovieData?.data?.imdbRating}</span>
          </div>
          <div className="uppercase text-[12px] border-r-[1px] border-r-gray-500 pr-5">
            <p className="text-gray-500">User Score</p>
            <p>{detailMovieData?.data?.imdbVotes ?? '0'} Votes</p>
          </div>
          <div className="uppercase text-[12px] border-r-[1px] border-r-gray-500 px-5">
            <p className="text-gray-500">Status</p>
            <p>Released</p>
          </div>
          <div className="uppercase text-[12px] border-r-[1px] border-r-gray-500 px-5">
            <p className="text-gray-500">language</p>
            <p>{detailMovieData?.data?.Language ?? '-'}</p>
          </div>
          <div className="uppercase text-[12px] border-r-[1px] border-r-gray-500 px-5">
            <p className="text-gray-500">budget</p>
            <p>{detailMovieData?.data?.BoxOffice ?? '-'}</p>
          </div>
          <div className="uppercase text-[12px] px-5">
            <p className="text-gray-500">production</p>
            <p>{detailMovieData?.data?.Director == 'N/A' ? '-' : detailMovieData?.data?.Director}</p>
          </div>
        </div>
        <div className="min-h-[340px]  absolute -bottom-32 left-44 right-44 flex  justify-start p-5 gap-5">
          <div className="min-h-[340px]  min-w-[220px] max-w-[220px]">
            <Image src={detailMovieData?.data?.Poster} width={220} height={330} alt="image" />
          </div>

          <div>
            <div className="text-white mt-5">
              <p className="text-[18px]">{detailMovieData?.data?.Year}</p>
              <p className="text-[36px] font-bold">{detailMovieData?.data?.Title}</p>
              <p className="text-[14px]">{detailMovieData?.data?.Genre}</p>
            </div>

            <div className="mt-[130px] ">
              <p className="text-[#FF0000] font-bold text-[14px]">OVERVIEW</p>
              <p className="text-[14px] w-[526px] text-wrap mt-3">
                {detailMovieData?.data?.Plot}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[600px] pt-44 px-[198px] max-w-[1680px] mx-auto bg-white">
        <div className="">
          <ReviewMovies />
        </div>
      </div>
      {/* Recomendations Movies */}
      <div className="min-h-[600px] bg-gray-900 px-[198px] py-20 max-w-[1680px] mx-auto ">
        <p className="uppercase text-[14px] font-bold text-white mb-5">
          Recomendations Movies
        </p>
        <div className="flex justify-start items-center gap-7">
          {topThreeMovies.data?.map((item:any) => {
            return <MovieCard data={item} key={item.imdbID}  />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
