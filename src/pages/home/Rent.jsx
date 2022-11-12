import React from "react";

export default function Rent() {
  return (
    <div className="home_container">
      <div>
        <h1>
          Rent a <span className="purple">Place</span>away from{" "}
          <span className="purple">Home</span>in the{" "}
          <span className="purple">Metaverse</span>
        </h1>
        <p className="desc">
          we provide you access to luxury and affordable house in the metaverse,
          get a chance to turn your imagination to reality at your comfort zone
        </p>
        <form>
          <input
            type="text"
            name=""
            id=""
            className="locate"
            placeholder="Search for location"
          />{" "}
          <input type="submit" value="Search" className="search" />
        </form>
      </div>
      <img src="/assets/Group 4028 (1).png" alt="" className="location_img" />
    </div>
  );
}
