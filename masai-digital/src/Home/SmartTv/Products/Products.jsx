import "./Products.css";
import { useState, useEffect } from "react";
import { BsHeartFill,BsSquare } from "react-icons/bs";
export default function Products() {
  const [item, updateItem] = useState([]);
  useEffect(() => {
    fetchedItems();
  }, []);

  async function fetchedItems() {
    const data = await fetch("http://localhost:3004/products");
    const response = await data.json();
    console.log(data);
    updateItem(response);
  }
  return (
    <div className="Products">
      {item.map((i) => (
        <div className="card" key={i}>
          <img  src={i.src} />
          <p className="des">{i.description}</p>
          <div className="para"><p className="pri">{i.price}</p>
          <p className="reb">{i.rebate}</p>
          <p className="dis">{i.discount}</p></div>
         
          <button id="offer">{i.offer}</button>
          <div className="cardft">
          <div className="wsicon">
            <p><BsSquare/></p>
           <p> {i.compare}</p></div>
           <div className="wsicon">
           <p><BsHeartFill/></p>
           <p>{i.wishlist}</p></div>           
           </div>
        </div>
      ))}
    </div>
  );
}
