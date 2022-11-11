import React from 'react'

export default function ConnectWallet() {
  return (
    <div>
      <div className="wallets">
        <div className="wallet_hd flex">
          <h3>Connect Wallet</h3>
          <img src="/assets/x.svg" alt="criss-cross close icon" />
        </div>

        <p>choose your wallet</p>
        <div className="flex">
          <img src="/assets/image 66.png" alt="" /> <p> Metamask</p>
        </div>
        <div className="flex">
          <img src="/assets/image 69.png" alt="" />
          <p>WalletConect</p>
        </div>
      </div>
    </div>
  );
}
