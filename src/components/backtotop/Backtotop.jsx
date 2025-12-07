import React, { useEffect, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

const Backtotop = () => {
  const [isvisible, setIsvisible] = useState(false);

  useEffect(() => {
    const funcs = () => {
      if (window.scrollY > 500) {
        setIsvisible(true);
      } else {
        setIsvisible(false);
      }
    }
     window.addEventListener('scroll',funcs)
  },[]);



 const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      {isvisible && (
        <div
          onClick={scrollToTop}
          className="size-10 bg-primary cursor-pointer fixed z-99999 bottom-10 right-10 flex justify-center items-center rounded-[4px]"
        >
          <MdKeyboardArrowUp className="text-white" size={40} />
        </div>
      )}
    </div>
  );
};

export default Backtotop;
