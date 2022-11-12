import React from "react";

export default function More() {
  return (
    <div className="more_section">
      <div className="more_content">
        {" "}
        <h4 className="wht_accent meta">Metabnb NFTs</h4>
        <p className="wht_accent meta_con">
          Discover our NFT gift cards collection. Loyal customers get amazing
          gift cards which are traded as NFTs. These NFTs gives our customer
          access to loads of our exclusive services.
        </p>
        <button className="more_btn">Learn more</button>
      </div>
      <img src="/assets/Frame 59546.png" alt="" className="more_image" />
    </div>
  );
}
