"use client";
import Image from "next/image";
import Link from "next/link";
import WalletsProvider from "../wallets";
import { useState, useEffect } from "react";
import { fetchCurrentUsername } from "@/utils";

const Navbar = () => {
  const [username, setUsername] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUsernameCall();
  }, []);

  async function fetchUsernameCall() {
    setLoading(true);
    let user = await fetchCurrentUsername();
    setUsername(user);
    setLoading(false);
  }

  return (
    <div className="flex justify-between items-center py-4">
      <Link href="/">
        <Image src={"/iks-logo.png"} width={200} height={200} alt="iks logo" />
      </Link>
      <div className="flex items-center ">
        <Link href={`/events/${username}`}>
          <button className="rounded-full px-8 py-2 mr-8 flex items-center bg-gradient-to-r from-[#9000FF] to-[#1D102700] hover:bg-gradient-to-r hover:from-white hover:to-white hover:text-black ">
            <p>@{username}</p>
          </button>
        </Link>
        <button className="flex items-center py-3 px-3 rounded-lg">
          <p>
            <WalletsProvider />
          </p>
        </button>
      </div>
    </div>
  );
};
export default Navbar;
