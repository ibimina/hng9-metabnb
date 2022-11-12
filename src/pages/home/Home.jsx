import React from "react";
import { NavBar } from "../../components";
import Inspiration from "./Inspiration";
import "./home.css";
import Rent from "./Rent";
import More from "./More";
export default function Home() {
  return (
    <div>
      <NavBar />
      <Rent />
      <div className="banner flex">
        <div className="flex gap">
          <img src="/assets/Group 59537.svg" alt="" className="nft lit" />
        </div>
        <div className="flex gap">
          <img src="/assets/Group 4040.svg" alt="" className="nft" />
        </div>
        <div className="flex gap">
          <img src="/assets/Frame 4041.svg" alt="" className="nft" />
        </div>
      </div>
      <Inspiration />
      <More/>
    </div>
  );
}
