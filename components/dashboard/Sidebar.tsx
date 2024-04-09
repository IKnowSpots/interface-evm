"use client";
import Image from "next/image";
import NewSidebarItems from "./SidebarItems";
import Link from "next/link";
import { useState } from "react";
import WalletsProvider from "@/components/wallets";

const Sidebar = (props: any) => {
  const [shortPublicKey, setPublicKey] = useState<String>();

  // function shortenString(input: String, maxLength: any) {
  //   if (input.length <= maxLength) {
  //     return input; // No need to shorten if it's already shorter than maxLength.
  //   } else {
  //     const firstPart = input.slice(0, maxLength / 2);
  //     const lastPart = input.slice(-maxLength / 2);
  //     let finalString = firstPart + "..." + lastPart;
  //     setPublicKey(finalString);
  //   }
  // }

  let publicKey = undefined;

  return (
    <div
      id="sidebar"
      className="pl-6 pr-2 bg-[rgb(61,23,111)] w-[20%] pt-8 h-screen sticky top-0"
    >
      <div className="bg-dashboard blur-[220px] absolute w-[60%] h-[400px]"></div>

      <Link href="/" className="relative z-10 h-[10%]">
        <Image
          src="/iks-logo.png"
          width="200"
          height="400"
          alt="I know spots logo"
        />
      </Link>
      <div className="flex flex-col justify-around h-[90%]">
        <div className="py-[10%] text-white pr-4 relative">
          <span onClick={() => {
            props.setActivePage("ActivePage")
            console.log('clicked active page')
          }} className="cursor-pointer opacity-75 sidebar-btn">
            <NewSidebarItems
              icon_name="Fire_fill"
              section_name="Active Events"
              page_name="active"
              isActive={props.activePage == "ActivePage"}
            />
          </span>

          <span onClick={() => props.setActivePage("InactivePage")} className="cursor-pointer opacity-75 sidebar-btn">
            <NewSidebarItems
              icon_name="3d_box_fill"
              section_name="Inactive Events"
              page_name="inactive"
              isActive={props.activePage == "InactivePage"}
            />
          </span>

          <span onClick={() => props.setActivePage("MintedPage")} className="cursor-pointer opacity-75 sidebar-btn">
            <NewSidebarItems
              icon_name="Fire_fill"
              section_name="Minted Collections"
              page_name="minted"
              isActive={props.activePage == "MintedPage"}
            />
          </span>

          <span onClick={() => props.setActivePage("ShortlistPage")} className="cursor-pointer opacity-75 sidebar-btn">
            <NewSidebarItems
              icon_name="CPU"
              section_name="Shortlist"
              page_name="shortlist"
              isActive={props.activePage == "ShortlistPage"}
            />
          </span>

          <span onClick={() => props.setActivePage("RewardsPage")} className="cursor-pointer opacity-75 sidebar-btn">
            <NewSidebarItems
              icon_name="lightning_fill"
              section_name="Rewards"
              page_name="rewards"
              isActive={props.activePage == "RewardsPage"}
            />
          </span>
        </div>
        <div>
          <div className="text-base pl-4 text-white">
            <Link target="_blank" href="/support">
              <p className="py-1 relative z-10 opacity-50 sidebar-elements">
                Support
              </p>
            </Link>
            <Link target="_blank" href="/">
              <p className="py-1 relative z-10 opacity-50 sidebar-elements">
                Docs
              </p>
            </Link>
            <Link target="_blank" href="https://github.com/IKnowSpots">
              <div className="flex items-center opacity-50 py-1 sidebar-elements">
                <p className=" pr-2 sidebar-elements">GitHub </p>
                <Image
                  src="/icons/arrow.svg"
                  width="17"
                  height="100"
                  alt="arrow icon"
                  className="rotate-[145deg]"
                />
              </div>
            </Link>
            <Link target="_blank" href="https://twitter.com/iknowspots">
              <div className="flex items-center py-1 sidebar-elements opacity-50">
                <p className="pr-2 sidebar-elements sidebar-elements">
                  Twitter
                </p>
                <Image
                  src="/icons/arrow.svg"
                  width="17"
                  height="100"
                  alt="arrow icon"
                  className="rotate-[145deg]"
                />
              </div>
            </Link>
          </div>
          <div className="mt-[5%]">
            {publicKey ? (
              <button className="block">
                <div className="flex border border-white px-3 py-4">
                  <p className="px-4 text-white">
                    {/* {shortPublicKey} */}
                    <WalletsProvider />
                  </p>
                </div>
              </button>
            ) : (
              <WalletsProvider />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
