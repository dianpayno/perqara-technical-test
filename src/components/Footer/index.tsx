import React from "react";
import Image from "next/image";
import footerImage from "@/assets/movie-white.svg";

const FooterComponents = () => {
  return <div className="bg-gray-800 w-full h-[160px] flex text-gray-500 text-[13px] justify-around items-center max-w-[1680px] mx-auto">
    <p>©  2021 MoovieTime. All rights reserved.</p>
    <Image src={footerImage} width={95} height={95} alt="image" />
    <p>Made with NextJs - Dian Herdiana</p>

  </div>;
};

export default FooterComponents;
