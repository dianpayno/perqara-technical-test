import FooterComponents from "@/components/Footer";
import NavbarComponents from "@/components/Navbar";
import React from "react";

interface LayoutInterface {
  children: React.ReactNode;
}

const MovieLayoutComponents = ({ children }: LayoutInterface) => {
  return (
    <div className="bg-gray-700">
      <NavbarComponents />
     
      {children}
      <FooterComponents />
    </div>
  );
};

export default MovieLayoutComponents;
