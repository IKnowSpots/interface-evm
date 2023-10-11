"use client";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { WalletProvider, useWallet } from "@solana/wallet-adapter-react";
import { WalletConnectButton } from "@solana/wallet-adapter-react-ui";
// import WalletsProvider from "../../components-integration/wallets";

const WalletsProvider = dynamic(() => import("../../components-integration/wallets"), {
    ssr: false,
});

const Navbar = () => {
    const { wallets } = useWallet();

    console.log("check", wallets);

    return (
        <nav className="z-[10] flex gap-[15rem] justify-center items-center py-8 w-full absolute">
            <Link href="/">
                <Image
                    src="/iks-logo.png"
                    width="252"
                    height="300"
                    className=""
                    alt="I know spots logo"
                />
            </Link>
            <div className="flex gap-[5rem] justify-center items-center">
                <Link href="/dashboard">
                    <p className="hoverUnderline">Dashboard</p>
                </Link>

                <Link href="#howitworks">
                    <p className="hoverUnderline">Product</p>
                </Link>
                {/* <Link href="/infra">
                    <p>Infra</p>
                </Link> */}

                <Link
                    target="_blank"
                    href="https://docs.google.com/document/d/1Ayzu2fjTUuCTS3TXmCySz6xfIWffbJshLgd0Uh47wS0/edit"
                >
                    <p className="hoverUnderline">Docs</p>
                </Link>
                <Link href="/support">
                    <p className="hoverUnderline">Support</p>
                </Link>
            </div>

            <Link href="/">
                <p className="border border-[#C584F5] px-4 py-2 rounded-xl ">
                    {/* Connect Wallet */}
                    <WalletsProvider />
                </p>
            </Link>
        </nav>
    );
};
export default Navbar;
