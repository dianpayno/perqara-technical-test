import React, { Fragment } from "react";
import ReviewMovieCard from "../ReviewMovieCard";

const ReviewMovies = () => {
  return (
    <div>
      <p className="text-[#FF0000] font-bold text-[14px] mb-4">REVIEWS</p>
      <div className="flex justify-start items-center gap-7">
        {Array.from({ length: 2 }).map((_, index) => {
          return (
            <Fragment key={index}>
              <ReviewMovieCard />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewMovies;
