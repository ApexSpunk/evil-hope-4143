import React from "react";
import './Header.css'
import { FaHome } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";
import { BsFillGridFill,BsBorderWidth } from "react-icons/bs";

const Header = () => {
  return (
    <div>
     <div className="home"><a className="tohome" href="xyz"> <FaHome /></a>
     <a className="tohome" href="xyz"><AiOutlineRight /></a> 
      <div><p>Television</p></div>
       </div>
      <hr />
      <div className="headermenu">
        <div >
          <h3 className="filter">Fillter</h3>
         </div>
        <div >
          <h1 className="television">Television</h1>
          <p>(Showing 1- 24 products of 252 products)</p>
           </div>
        <div className="sorting"><p>sorting by: </p> 
        <div> <button className="info">Relevence</button></div>
        <div><p>price(Low-Heigh)</p></div>
        <div><p>price(Heigh-Low)</p></div>
        <div className="bsBorderWidth">
           <div className="bsbord"><p className="ico"><BsBorderWidth/></p></div>
           <div className="bsfill"><p className="ico"><BsFillGridFill/></p></div> 
        </div>
        </div>
        </div> 
    </div>
  );
};

export default Header;
