import React, { useState } from "react";
import { CardList, Footer, NavBar } from "../../components";
import "./place.css";
const data = [
  {
    image: "/assets/Frame 151 (4).png",
    name: "Desert king",
    price: "1MBT per night",
    distance: "2345km away",
    available: "avaliable for 2 weeks stay",
  },
  {
    image: "/assets/Frame 151 (5).png",
    name: "Desert king",
    price: "1MBT per night",
    distance: "2345km away",
    available: "avaliable for 2 weeks stay",
  },
  {
    image: "/assets/Frame 151 (6).png",
    name: "Desert king",
    price: "1MBT per night",
    distance: "2345km away",
    available: "avaliable for 2 weeks stay",
  },
  {
    image: "/assets/Frame 151 (7).png",
    name: "Desert king",
    price: "1MBT per night",
    distance: "2345km away",
    available: "available for 2 weeks stay",
  },
  {
    image: "/assets/Frame 151 (16).png",
    name: "Desert king",
    price: "1MBT per night",
    distance: "2345km away",
    available: "avaliable for 2 weeks stay",
  },
  {
    image: "/assets/Frame 151 (1).png",
    name: "Desert king",
    price: "1MBT per night",
    distance: "2345km away",
    available: "avaliable for 2 weeks stay",
  },
  {
    image: "/assets/Frame 151 (2).png",
    name: "Desert king",
    price: "1MBT per night",
    distance: "2345km away",
    available: "avaliable for 2 weeks stay",
  },
  {
    image: "/assets/Frame 151 (3).png",
    name: "Desert king",
    price: "1MBT per night",
    distance: "2345km away",
    available: "avaliable for 2 weeks stay",
  },
  {
    image: "/assets/Frame 151 (8).png",
    name: "Desert king",
    price: "1MBT per night",
    distance: "2345km away",
    available: "avaliable for 2 weeks stay",
  },
  {
    image: "/assets/Frame 151 (9).png",
    name: "Desert king",
    price: "1MBT per night",
    distance: "2345km away",
    available: "avaliable for 2 weeks stay",
  },
  {
    image: "/assets/Frame 151 (10).png",
    name: "Desert king",
    price: "1MBT per night",
    distance: "2345km away",
    available: "avaliable for 2 weeks stay",
  },
  {
    image: "/assets/Frame 151 (11).png",
    name: "Desert king",
    price: "1MBT per night",
    distance: "2345km away",
    available: "avaliable for 2 weeks stay",
  },
  {
    image: "/assets/Frame 151 (12).png",
    name: "Desert king",
    price: "1MBT per night",
    distance: "2345km away",
    available: "avaliable for 2 weeks stay",
  },
  {
    image: "/assets/Frame 151 (13).png",
    name: "Desert king",
    price: "1MBT per night",
    distance: "2345km away",
    available: "avaliable for 2 weeks stay",
  },
  {
    image: "/assets/Frame 151 (14).png",
    name: "Desert king",
    price: "1MBT per night",
    distance: "2345km away",
    available: "avaliable for 2 weeks stay",
  },
  {
    image: "/assets/Frame 151 (15).png",
    name: "Desert king",
    price: "1MBT per night",
    distance: "2345km away",
    available: "avaliable for 2 weeks stay",
  },
];
export default function PlaceToStay() {
  const [show, setShow] = useState(false);
  
  return (
    <div>
      <NavBar />
      <div className="place_margin">
        <div className="loc_con">
          <div className="place_con">
            <div
              className="places"
              aria-label="show location"
              onClick={() => (!show ? setShow(true) : setShow(false))}
            >
              <span>Place</span>
              <img
                src="/assets/Group (3).svg"
                alt="dropdown icon"
                className={!show ? "arrow_down" : "arrow_up"}
              />
            </div>
            <ul
              className={`loc_sort ${show ? "show_loca" : ""}`}
              data-visible={show}
            >
              <li>Resturant</li>
              <li>Cottage</li>
              <li>Castle</li>
              <li>fantast city</li>
              <li>beach</li>
              <li>Carbins</li>
              <li>Off-grid</li>
              <li>Farm</li>
            </ul>
          </div>

          <div className="loc">
            {" "}
            <span>Location</span> <img src="/assets/setting-5.svg" alt="location settings" className="loc_set"/>
          </div>
        </div>

        <CardList data={data} />
      </div>
      <Footer />
    </div>
  );
}
