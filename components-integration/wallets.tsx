"use client";
// import { useWallet } from "@solana/wallet-adapter-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import "react-toastify/dist/ReactToastify.css";

const WalletsProvider = () => {

    return(
        <div><ConnectButton accountStatus="address" showBalance={false} chainStatus="none"/></div>
    )
    // const { select, wallets, publicKey, disconnect } = useWallet();

    // const [shortPublicKey, setPublicKey] = useState<String>();

    // function shortenString(input: any, maxLength: any) {
    //     if (input.length <= maxLength) {
    //         return input; // No need to shorten if it's already shorter than maxLength.
    //     } else {
    //         const firstPart = input.slice(0, maxLength / 2);
    //         const lastPart = input.slice(-maxLength / 2);
    //         let finalString = firstPart + "..." + lastPart;
    //         setPublicKey(finalString);
    //         // return firstPart + "..." + lastPart;
    //     }
    // }

    // useEffect(() => {
    //     console.log("Public Key is ", publicKey);
    //     shortenString(publicKey, 10);
    // }, [publicKey]);

    // let modal = 100;

    // return !publicKey ? (
    //     <WalletModal />
    // ) : (
    //     <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
    //         {/* <p>{publicKey.toBase58()}</p> */}
    //         <button onClick={disconnect}>Disconnect Wallet</button>
    //     </div>
    // );

    // function WalletModal() {
    //     return (
    //         <div className="flex flex-col gap-[16px] justify-center items-center">
    //             {wallets.filter((wallet) => wallet.readyState === "Installed")
    //                 .length > 0 ? (
    //                 wallets
    //                     .filter((wallet) => wallet.readyState === "Installed")
    //                     .map((wallet) => (
    //                         <button
    //                             key={wallet.adapter.name}
    //                             onClick={() => select(wallet.adapter.name)}
    //                             style={{
    //                                 width: "64px",
    //                                 height: "48px",
    //                                 fontSize: "14px",
    //                                 display: "flex",
    //                                 alignItems: "center",
    //                                 justifyContent: "center",
    //                                 cursor: "pointer",
    //                             }}
    //                         >
    //                             <Image
    //                                 src={wallet.adapter.icon}
    //                                 alt={wallet.adapter.name}
    //                                 height={24}
    //                                 width={24}
    //                             />
    //                             <span>{wallet.adapter.name}</span>
    //                         </button>
    //                     ))
    //             ) : (
    //                 <p>
    //                     No wallet found. Please download a supported Solana
    //                     wallet
    //                 </p>
    //             )}
    //         </div>
    //     );
    // }
};

export default WalletsProvider;
