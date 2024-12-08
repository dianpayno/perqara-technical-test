/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import LogoImage from "@/assets/logo.svg";

import { MdMovie } from "react-icons/md";
import { INavbarMenu, navbarMenu } from "@/data/navbar-menu";
import ButtonCategories from "../Button/ButtonCategories";
import { useRouter } from "next/router";
import { IoSearchOutline } from "react-icons/io5";
import {
  getMoviesBySearch,
  handleSetMovieListBySearchToEmpty,
  setWindowWidth,
} from "@/lib/features/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
const NavbarComponents = () => {
  const router = useRouter();
  const { slug } = router.query as { slug: string };
  const [isTransparent, setTransparent] = useState(false);
  const dispatch = useDispatch();
  const [valueSearch, setValueSearch] = useState("");
  const { movieBySearchList, windowWidth } = useSelector((state: RootState) => state.movies);
  const [windowScroll, setWindowScroll] = useState<number>(0);

  
    useEffect(() => {
      const handleResize = () => {
        dispatch(setWindowWidth(window.innerWidth))
       
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, [dispatch  ]);

  

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setWindowScroll(scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (slug && windowScroll < 438) {
      setTransparent(true);
    } else {
      setTransparent(false);
    }
  }, [slug, windowScroll]);

  const handleNavigate = (item: INavbarMenu) => {
    dispatch(handleSetMovieListBySearchToEmpty());
    router.push(item.path);
  };

  const handleSearchMovies = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValueSearch(value);
    if (value != " ") {
      dispatch(getMoviesBySearch({ q: value }));
    }
  };

  const handleNavigateToDetail = (id: string) => {
    dispatch(handleSetMovieListBySearchToEmpty());
    setValueSearch("");
    router.push(`/movies/details/${id}`);
  };

  const handleNavigateToHome = () => {
    setValueSearch("");
    dispatch(handleSetMovieListBySearchToEmpty());
    router.push("/");
  };

  return (
    <div
      className={`w-full max-w-[1680px] mx-auto h-[66px] min-w-[600px] ${
        isTransparent ? "bg-white bg-opacity-20" : "bg-gray-950"
      }   fixed top-0  right-0 left-0 z-50  text-white flex justify-around items-center`}
    >
      {/* Logo & Seadrch */}
      <div className="flex justify-start items-center gap-7">
        <div onClick={handleNavigateToHome} className="cursor-pointer flex justify-center items-center min-w-[50px] min-h-[50px]">
          <Image src={LogoImage} width={150} height={150} alt="image" />
        </div>
        <div className="h-[36px] bg-gray-900 w-full relative flex justify-between items-center px-2 rounded-[4px]">
          <div className="flex justify-between items-center min-w-[571px] max-w-[571px]">
            <div className="flex justify-start w-full items-center">
              <MdMovie size={23} color="#989898" />
              <input
                value={valueSearch}
                onChange={handleSearchMovies}
                placeholder="Find movie"
                type="text"
                className="w-full px-2 h-[36px] bg-gray-900 focus:outline-none text-[14px] placeholder:text-white"
              />
            </div>

            <IoSearchOutline size={20} color="#989898" />
          </div>
          {movieBySearchList.data?.length > 0 && (
            <div className="bg-gray-900 min-h-[271px] overflow-y-auto top-10 right-0 absolute left-0 flex flex-col justify-start items-start rounded-b-[8px] p-3">
              {movieBySearchList.data?.map((item: any) => {
                return (
                  <button
                    onClick={() => handleNavigateToDetail(item.imdbID)}
                    className="text-[14px] capitalize mt-1 w-full flex justify-start h-[30px] items-center px-2 rounded-[8px] hover:bg-gray-500"
                    key={item.imdbID}
                  >
                    <p>{item.Title.substring(0, 50)}</p>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Menu LIst */}
      {
        windowWidth > 1456 &&  <div className="flex justify-end items-center gap-7 text-[14px] font-semibold">

        {navbarMenu.map((list: INavbarMenu) => (
          <div
            key={list.id}
            onClick={
              list.title == "Categories" ? () => {} : () => handleNavigate(list)
            }
            className="flex justify-center items-center gap-2"
          >
            {list.title == "Categories" ? (
              <ButtonCategories />
            ) : (
              <button className="uppercase">{list.title}</button>
            )}
          </div>
        ))}
      </div>
      }
     
    </div>
  );
};

export default NavbarComponents;
