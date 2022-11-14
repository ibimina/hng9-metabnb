import React from "react";
import { Footer, NavBar } from "../../components";
import Inspiration from "./Inspiration";
import "./home.css";
import Rent from "./Rent";
import More from "./More";
export default function Home() {
  return (
    <>
      <NavBar />
      <Rent />
      <div className="banner flex">
        <div className="flex gap">
          <img src="/assets/Group 59537.svg" alt="MBToken logo" className="nft lit" />
        </div>
        <div className="flex gap">
          <img src="/assets/Group 4040.svg" alt="Metamask logo" className="nft" />
        </div>
        <div className="flex gap">
          <img src="/assets/Frame 4041.svg" alt="Opensea logo" className="nft" />
        </div>
      </div>
      <Inspiration />
      <More/>
      <Footer/>
    </>
  );
}
