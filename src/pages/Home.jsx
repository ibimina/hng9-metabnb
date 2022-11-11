import React from "react";
import NavBar from "../components/navbar/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div>
        <div>
          <h1>
            Rent a <span className="purple">Place</span>away from{" "}
            <span className="purple">Home</span>in the{" "}
            <span className="purple">Metaverse</span>
          </h1>
          <p>
            we provide you access to luxury and affordable house in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <form >
            <input type="text" name="" id="" />{" "}
            <input type="submit" value="Search" />
          </form>
        </div>
        <div>

        </div>
      </div>

    </div>
  );
}
