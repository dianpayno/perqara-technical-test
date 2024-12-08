import React from "react";
import { FaStar } from "react-icons/fa";

const ReviewMovieCard = () => {
  return (
    <div className="min-w-[582px] max-w-[582px] min-h-[284px] p-7 max-h-[284px] bg-slate-100 rounded-[8px]">
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center gap-2">
          <div className="h-[48px] w-[48px] rounded-full bg-slate-300"></div>
          <div className=" flex justify-start items-start flex-col ">
            <p className="text-[14px] font-bold">SWITCH.</p>
            <p className="text-[12px] text-gray-500">December 18, 2020</p>
          </div>
        </div>
        <div className="w-[97px] h-[52px] bg-slate-200 relative flex justify-center gap-2 items-start rounded-[8px]">
          <FaStar color="#ffd32c" size={20} className="mt-2" />
          <span className="text-[36px] font-bold text-black">5.0</span>
        </div>
      </div>

      {/* Content */}
      <div>
        <p className="text-[13px] italic text-gray-800 mt-5">
          It isnt as easy as saying Wonder Woman 1984 is a good or bad movie.
          The pieces are there, and there are moments I adore, but it does come
          across as a bit of a mess, even though the action sequences are
          breathtaking. If youre a fan of the original film, youll be more
          willing to take the ride, but for those more indifferent, it may be a
          bit of a blander sit. If you can and are planning to watch it, the
          theatrical experience is the way to go - there is nothing like seeing
          these stunning sets, fun action scenes and hearing Zimmers
          jaw-dropping score like on the big screen. - Chris dos Santos... <span className="text-red-400 underline">read
          the rest.</span> 
        </p>
      </div>
    </div>
  );
};

export default ReviewMovieCard;
