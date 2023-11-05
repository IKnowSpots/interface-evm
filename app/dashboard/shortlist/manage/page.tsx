"use client"
import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import DashNav from "@/components/dashboard/Navbar";
import Script from "next/script";
import Manual from "@/components/Manual"
import Bulk from "@/components/Bulk"

const ManageShortlist = () => {

    let tokenId = 1;

    const [choose, setChoose ] = useState(false)

  return (
    <div className="flex h-full w-full">
        <Sidebar />
    <div className="bg-[#25143a] pb-12 text-white overflow-y-hidden w-[80%]">
        <div className="">
            <DashNav />
        </div>
        {/* <hr className="mx-4" /> */}
        <div className="relative z-10 mt-12">
        <div className="bg-createEvent blur-[220px] absolute w-[70%] h-[700px] z-[-1]" />
            <div className="flex flex-col items-center">
                <div className="w-[80%]">
                    <h3 className="text-3xl font-semibold mb-2">Shortlist</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quo ullam recusandae cum magni nulla commodi temporibus voluptatem illo voluptas?</p>
                </div>
            </div>

            <div className="flex justify-center my-24 items-center">
                <div className="box-background w-[70%] px-6 py-12 relative z-20">
                    <div className=" flex flex-col justify-center items-center gap-20">
                        <div className="w-[85%] flex justify-center items-center p-0.5 border-2 border-[#A0A0A038] rounded-lg">
                            <button className={`flex justify-center items-center p-2 w-[50%] rounded-lg ${choose?"bg-transparent":"bg-[#201A24] border-2 border-[#A0A0A038]"}`} onClick={() => setChoose(false)}>Manual</button>
                            <button className={`flex justify-center items-center p-2 w-[50%] rounded-lg ${choose?"bg-[#201A24] border-2 border-[#A0A0A038]":"bg-transparent"}`} onClick={() => setChoose(true)}>Bulk</button>
                        </div>

                        <div className="w-[85%]">
                            {choose?<Bulk tokenId={tokenId} />:<Manual tokenId={tokenId} />}
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
