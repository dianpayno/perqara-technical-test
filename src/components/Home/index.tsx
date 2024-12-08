/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import CarouselComponents from "../Carousel";
import ContainerCard from "../ContainerCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getTopHomepageMovies,
  getTopThreeMovies,
} from "@/lib/features/movieSlice";
import { RootState } from "@/lib/store";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

const HomeComponents = () => {
  const dispatch = useDispatch();
  const { topThreeMovies, windowWidth } = useSelector(
    (state: RootState) => state.movies
  );
  const [activeIndex, setActiveIndex] = useState<number>(0);
  useEffect(() => {
    dispatch(getTopHomepageMovies());
    dispatch(getTopThreeMovies());
  }, [dispatch]);

  const handleChangeSwiper = (index: number) => {
    if(windowWidth < 1400){
      setActiveIndex(index);
    } else  if (index == 4) {
      setActiveIndex(0);
    } else {
      setActiveIndex(index + 1);
    }
  };
  return (
    <div className="min-h-[calc(100vh-100px)] flex-col bg-gray-900 flex pt-[100px] max-w-[1680px] mx-auto">
      <div className="flex justify-center items-center w-full ">
        <div className="flex justify-center items-center my-10 w-full">
          <Swiper
            slidesPerView={windowWidth > 1400 ? 3 : 1}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            loop={true}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
            onSlideChange={(swiper: any) =>
              handleChangeSwiper(swiper.realIndex)
            }
            onSwiper={(swiper: any) => handleChangeSwiper(swiper.realIndex1)}
          >
            {topThreeMovies.data.map((item: any, index: number) => {
              const active = activeIndex === index;
              return (
                <SwiperSlide key={item.imdbID}>
                  <CarouselComponents isActive={active} data={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      <div className="relative ">
        <div className="bg-gray-800 min-h-[404px] absolute top-0 z-20 left-0 right-0"></div>
        <div className="bg-gray-900 absolute  top-[299px] left-0 z-20 right-0 bottom-0"></div>
        {/* Container card */}
        <ContainerCard />
      </div>
    </div>
  );
};

export default HomeComponents;
