import React from "react";
import "./cardlist.css";
export default function CardList({ data }) {
  return (
    <div>
      <ul className="card_list">
        {data.map((card, index) => (
          <li key={index} className="card_container">
            <img src={card.image} alt="" className="nft_image" />
            <div className="card_flex card_margin">
              <p className="text">{card.name}</p>
              <p className="text price">{card.price}</p>
            </div>
            <div className="card_flex  card_margin">
              <p className="text">{card.distance}</p>
              <p className="text">{card.available}</p>
            </div>
            <div className="flex card_gap">
              <img src="/assets/Star.svg" alt="" />
              <img src="/assets/Star.svg" alt="" />
              <img src="/assets/Star.svg" alt="" />
              <img src="/assets/Star.svg" alt="" />
              <img src="/assets/Star.svg" alt="" />
            </div> 
          </li>
        ))}
      </ul>
    </div>
  );
}
