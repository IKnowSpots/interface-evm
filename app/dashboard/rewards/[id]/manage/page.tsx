"use client";
import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import DashNav from "@/components/navbar/NavbarDashboard";
import Script from "next/script";
import Manual from "@/components/ManualReward";
import Bulk from "@/components/BulkReward";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const ManageShortlist = () => {
  const pathName = usePathname();
  const tokenId = pathName?.split("/")[3];

  const [choose, setChoose] = useState(false);

  return (
    <div className="flex h-full w-full">
      <Sidebar />
      <div className="bg-[#25143a] pb-12 text-white overflow-y-hidden w-[80%]">
        <div className="">
          <DashNav />
        </div>
        <div className="relative z-10">
          <div className="bg-createEvent blur-[220px] absolute w-[70%] h-[700px] z-[-1]" />
          <div className="flex">
            {/* Route fix: temparary fixing to dashboard */}
            <Link href="/dashboard" className="px-4">
              <Image
                src={"/icons/back-btn.svg"}
                width={45}
                height={20}
                alt="back-btn"
                className="back-btn"
              />
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <div className="box-background w-[70%] min-h-[73vh] px-6 py-12 relative z-20">
              <div className=" flex flex-col justify-center items-center gap-10">
                <div className="w-[85%] flex justify-center items-center p-0.5 border-2 border-[#A0A0A038] rounded-lg">
                  <button
                    className={`flex justify-center items-center p-2 w-[50%] rounded-lg ${choose
                      ? "bg-transparent"
                      : "bg-[#201A24] border-2 border-[#A0A0A038]"
                      }`}
                    onClick={() => setChoose(false)}
                  >
                    Manual
                  </button>
                  <button
                    className={`flex justify-center items-center p-2 w-[50%] rounded-lg ${choose
                      ? "bg-[#201A24] border-2 border-[#A0A0A038]"
                      : "bg-transparent"
                      }`}
                    onClick={() => setChoose(true)}
                  >
                    Bulk
                  </button>
                </div>

                <div className="w-[85%]">
                  {choose ? (
                    <Bulk tokenId={tokenId} />
                  ) : (
                    <Manual tokenId={tokenId} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageShortlist;
