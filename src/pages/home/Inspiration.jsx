import React from "react";
import { CardList } from "../../components";
const data = [
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
];
export default function Inspiration() {
  return (
    <div className="ins_container">
      <h2 className="ins">Inspiration for your next adventure </h2>
      <CardList data={data} />
    </div>
  );
}
