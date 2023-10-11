"use client";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { WalletProvider, useWallet } from "@solana/wallet-adapter-react";
import { WalletConnectButton } from "@solana/wallet-adapter-react-ui";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WalletsProvider = dynamic(
    () => import("../../components-integration/wallets"),
    {
        ssr: false,
    }
);

const Navbar = () => {
    const { publicKey } = useWallet();

    function pushingDashboard() {
        if (!publicKey?.toBase58()) {
            toast.warn("Connect your wallet to proceed further!", {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else {
            window.location.replace("/dashboard");
        }
    }

    function pushingInventory() {
        if (!publicKey?.toBase58()) {
            toast.warn("Connect your wallet to proceed further!", {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else {
            window.location.replace("/inventory");
        }
    }

    return (
        <nav className="z-[10] ml-[-10%] flex gap-[8%] justify-center items-center py-8 w-[110%] absolute">
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <Link href="/">
                <Image
                    src="/iks-logo.png"
                    width="252"
                    height="300"
                    className=""
                    alt="I know spots logo"
                />
            </Link>
            <div className="flex gap-[10%] justify-center items-center">
                <button onClick={pushingDashboard}>
                    <p className="hoverUnderline">Dashboard</p>
                </button>

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

            <div className="flex gap-[10%]">
                <p className="border border-[#C584F5] px-4 py-2 rounded-xl w-[210px]">
                    <WalletsProvider />
                </p>

                <button onClick={pushingInventory}>
                    <p className="border border-[#C584F5] px-4 py-2 rounded-xl">
                        Inventory
                    </p>
                </button>
            </div>
        </nav>
    );
};
export default Navbar;
