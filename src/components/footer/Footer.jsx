import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <footer>
      <div>
        <img src="/assets/Group (1).svg" alt="" className="ft_logo" />
      </div>
      <div className="ft_links">
        <div>
          <p className="ft_list">Community</p>
          <ul>
            <li className="ft_mar">NFT</li>
            <li className="ft_mar">Tokens</li>
            <li className="ft_mar">Landlords</li>
            <li className="ft_mar">Discord</li>
          </ul>
        </div>
        <div>
          <p className="ft_list">Places</p>
          <ul>
            <li className="ft_mar">Castle</li>
            <li className="ft_mar">Farms</li>
            <li className="ft_mar">Beach</li>
            <li className="ft_mar">Learn more</li>
          </ul>
        </div>

        <div>
          <p className="ft_list">About us</p>
          <ul>
            <li className="ft_mar">Road map</li>
            <li className="ft_mar">Creators</li>
            <li className="ft_mar">Career</li>
            <li className="ft_mar">Contact us</li>
          </ul>
        </div>
      </div>
      <div className="footer_logo">
        <div>
          <div className="ft_flex">
            <img src="/assets/facebook.svg" alt="facebook icon" />
            <img src="/assets/instagram.svg" alt="instagram icon" />
            <img src="/assets/twitter.svg" alt="twitter icon" />
          </div>
        </div>
        <div className="ft_link">
          {" "}
          <img src="/assets/copyright.svg" alt="copyright icon" /> <span> 2022 Metabnb</span>{" "}
        </div>
      </div>
    </footer>
  );
}
