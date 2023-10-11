"use client";
import { useWallet } from "@solana/wallet-adapter-react";
import Image from "next/image";
import { useEffect } from "react";


const WalletsProvider = () => {
  const { select, wallets, publicKey, disconnect } = useWallet();

  useEffect(()=>{
    console.log("Public Key is ", publicKey);
    
  },[publicKey])
  return !publicKey ? (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {wallets.filter((wallet) => wallet.readyState === "Installed").length > 0 ? (
        wallets
          .filter((wallet) => wallet.readyState === "Installed")
          .map((wallet) => (
            <button
              key={wallet.adapter.name}
              onClick={() => select(wallet.adapter.name)}
              style={{
                width: '64px',
                height: '48px',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <Image src={wallet.adapter.icon} alt={wallet.adapter.name} height={24} width={24} />
              <span>{wallet.adapter.name}</span>
            </button>
          ))
      ) : (
        <p>No wallet found. Please download a supported Solana wallet</p>
      )}
    </div>
  ) : (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <p>{publicKey.toBase58()}</p>
      <button onClick={disconnect}>Disconnect Wallet</button>
    </div>
  );
};

export default WalletsProvider;
