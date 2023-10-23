"use client"
import Image from "next/image";
import { useState } from "react";

const Missions = () => {
    const [para,setPara]=useState("With NFTs, ticket authenticity can be easily verified,preventing counterfeiting and ensuring that only valid tickets are bought and sold.")
    function RenderLorem1() {
        return (
            <div>
                <p className="w-[85%] text-left text-[0.9rem] sm:text-[1rem] pt-8">
                    {para} 
                </p>
            </div>
        );
    }
    function RenderLorem2() {
        return <div></div>;
    }
    function RenderLorem3() {
        return <div></div>;
    }

    return (
        <div className="bg-[#3C3C3C] relative flex justify-between p-8 w-[80%] rounded-xl bg-opacity-40 bg-blur-md">
            <div className="flex flex-col items-start w-3/4">
                <h1 className="text-4xl sm:text-5xl mt-12 ">Our Mission</h1>
                <div className="flex justify-around gap-4 pt-6">
                    <button className="hoverUnderline cursor-pointer" onClick={()=>setPara("With NFTs, ticket authenticity can be easily verified,preventing counterfeiting and ensuring that only valid tickets are bought and sold.")}>Ticketing</button>

                    <button className="hoverUnderline cursor-pointer" onClick={()=>setPara("Put crypto in an escrow account to register for events.")}>RSVP Escrow</button>

                    <button className="hoverUnderline cursor-pointer" onClick={()=>setPara("Attendee data to analyze engagement & improve events")}>Data Analysis</button>
                </div>
                <RenderLorem1 />
            </div>
            <div className="w-1/4">
                <Image src="/dics.png" width="200" height="200" alt="discs" />
            </div>
        </div>
    );
};
export default Missions;
