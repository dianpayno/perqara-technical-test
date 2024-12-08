import React, { useState } from "react";
import categoriesImage from "@/assets/categories.svg";
import Image from "next/image";
import { categoryMenu, INavbarMenu } from "@/data/navbar-menu";
import { useRouter } from "next/router";

const ButtonCategories = () => {
  const [onHover, setOnHover] = useState(false);
  const router = useRouter();
  return (
    <div className="relative">
      <button
        onMouseEnter={() => setOnHover(true)}
        className="flex justify-start gap-1  items-center"
      >
        <Image src={categoriesImage} width={20} height={20} alt="image" />
        <span className="uppercase text-white text-[14px]">Categories</span>
      </button>
      {onHover && (
        <div
          onMouseLeave={() => setOnHover(false)}
          className="h-[334px] w-[153px] absolute p-3 top-7 bg-white flex flex-col justify-start items-start gap-3 rounded-[6px]"
        >
          {categoryMenu.map((item: INavbarMenu, i: number) => {
            return (
              <button
                key={i}
                onClick={() => router.push('/movies')}
                className="hover:bg-gray-200 rounded-[8px] w-full ps-2 flex justify-start items-center"
              >
                <p className="uppercase text-[12px] font-bold text-black ">
                  {item.title}
                </p>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ButtonCategories;
