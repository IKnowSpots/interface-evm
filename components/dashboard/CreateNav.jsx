"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
// import { useWallet } from "@solana/wallet-adapter-react";
import { fetchUsername } from "@/utils";

const CreateNav = () => {
    const [username, setUsername] = useState("iamacid");
    const [loading, setLoading] = useState(false);
    const { publicKey, wallets, sendTransaction } = useWallet();

    useEffect(() => {
        fetchUsernameCall();
    }, []);

    async function fetchUsernameCall() {
        setLoading(true);
        let user = await fetchUsername();
        // setUsername(user);
        setUsername("iamacid");
        setLoading(false);
    }

    return (
        <div className="flex justify-between items-center py-4">
            <Link href="/">
                <Image
                    src={"/iks-logo.png"}
                    width={300}
                    height={300}
                    alt="iks logo"
                />
            </Link>
            <div className="flex  ">
                <button className="rounded-full h-[] px-8 mr-8 flex items-center bg-gradient-to-r from-[#9000FF] to-[#1D102700] ">
                    <Image
                        src={"/bored_ape_image.png"}
                        width={30}
                        height={50}
                        alt="bored ape nft image"
                        className="rounded-xl"
                    />
                    <p>@{username}</p>
                </button>
                {/* remaning: fix the basic gradients of this */}
                <button className="flex items-center py-3 px-3 rounded-lg border border-white">
                    <Image
                        src={wallets[0].adapter.icon}
                        width={"30"}
                        height={"30"}
                        alt="Metamask fox svg"
                    />
                </button>
            </div>
        </div>
    );
};

export default CreateNav;
