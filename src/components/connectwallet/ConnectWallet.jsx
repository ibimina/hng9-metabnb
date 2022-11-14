import React from "react";
import "./connectwallet.css";
export default function ConnectWallet({ openW, handleOpenW }) {
  return (
    <div className={`wallets_container ${!openW ? "open" : ""}`}>
      <div className="wallets">
        <div className="wallet_hd flex">
          <h3>Connect Wallet</h3>
          <img
            src="/assets/x.svg"
            alt="criss-cross close icon"
            onClick={handleOpenW}
          />
        </div>
        <div className="choose">
          <p className="margin col">Choose your wallet</p>
          <div className="flex space margin">
            <div className="flex grey">
              <img src="/assets/image 66.png" alt="Metamask icon" />
              <p>Metamask</p>
            </div>
            <img src="/assets/Group (3).svg" alt="dropdown icon" />
          </div>

          <div className="flex space">
            <div className="flex grey">
              <img src="/assets/image 69.png" alt="Walletconnect icon" />
              <p>WalletConect</p>
            </div>
            <img src="/assets/Group (3).svg" alt="dropdown icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
