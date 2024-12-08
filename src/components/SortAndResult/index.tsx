import React from "react";
import ButtonPopularity from "../Button/ButtonPopularity";
import { categoryMenu, INavbarMenu } from "@/data/navbar-menu";

const SortAndResult = () => {
  return (
    <div className="w-[240px] h-[586px]  bg-gradient-to-b from-gray-950 via-bg-gray-900 to-bg-gray-800 rounded-[5px] z-50 shadow">
      <div className="p-5 border-b-[1px] border-b-gray-700">
        <p className="text-white font-bold">Sort Result By</p>
      </div>

      <div className="p-5 border-b-[1px] border-b-gray-700">
        <ButtonPopularity />
      </div>
      <div className="p-5 border-b-[1px] border-b-gray-700">
        <p className="text-white font-bold">Genres</p>
      </div>
      <div className="p-5">
        {
            categoryMenu.map((item:INavbarMenu, i: number) => {
                return (
                    <div key={i} className="text-white text-[14px] flex justify-between mb-2 items-center ">
                        <label >{item.title}</label>
                        <input
                        className=""
                        type="checkbox" name={item.title} value={item.title}/>
                        {/* <span className="checkmark"></span> */}
                    </div>
                )
            })
        }
      </div>
    </div>
  );
};

export default SortAndResult;
