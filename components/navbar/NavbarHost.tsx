"use client";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const WalletsProvider = dynamic(() => import("../wallets"), {
  ssr: false,
});

const Navbar = () => {
  return (
    <nav className=" flex gap-[20rem] justify-center items-center py-8">
      <Link href="/">
        <Image
          src="/iks-logo.png"
          width="252"
          height="300"
          className=""
          alt="I know spots logo"
        />
      </Link>
      <div className="flex justify-center items-center">
        <div className="flex gap-6">
          <Link href="/inventory">
            <p className="hoverUnderline text-xl">Inventory</p>
          </Link>
          <Link href="/support">
            <p className="hoverUnderline text-xl">Support</p>
          </Link>
        </div>
      </div>

      <p className=" text-center w-[12%] text-black   rounded-[1.5rem] ">
        <WalletsProvider />
      </p>
    </nav>
  );
};
export default Navbar;
