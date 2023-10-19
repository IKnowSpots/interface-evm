"use client";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import "react-toastify/dist/ReactToastify.css";

const WalletsProvider = () => {

    return(
        <div><ConnectButton accountStatus="address" showBalance={false} chainStatus="none"/></div>
    )
};

export default WalletsProvider;
