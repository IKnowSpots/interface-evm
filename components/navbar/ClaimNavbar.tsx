"use client";
import Image from "next/image";
import Link from "next/link";
import WalletsProvider from "@/components/wallets";

const Navbar = () => {
  return (
    <nav className=" flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 mx-auto pt-6 pb-4">
      <Link href="/" className="flex justify-center items-center">
        <Image
          src="/iks-logo.png"
          width="252"
          height="300"
          className="w-[75%] md:w-full"
          alt="I know spots logo"
        />
      </Link>

      <p className=" md:w-[30%] lg:w-[20%] text-black rounded-[1.5rem] ">
        <WalletsProvider />
      </p>
    </nav>
  );
};
export default Navbar;
