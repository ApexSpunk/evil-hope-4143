import React from "react";
import './Header.css'
import { FaHome } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";

const Header = () => {
  return (
    <div>
     <div className="home"><a className="tohome" href="xyz"> <FaHome /></a>
     <a className="tohome" href="xyz"><AiOutlineRight /></a> 
      <div><p>Television</p></div>
       </div>
       
    </div>
  );
};

export default Header;
