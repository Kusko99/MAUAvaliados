import React from "react";

const Navbar = ({ children }) => {
  return (
    <div className="flex items-center justify-around pt-2 pb-2 bg-black/30 shadow-inner text-white fixed top-0 left-0 right-0 z-50">
      {children}
    </div>
  );
};

export default Navbar;
