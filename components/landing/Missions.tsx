"use client";
import Image from "next/image";
import { useState } from "react";

const Missions = () => {
  const [para, setPara] = useState(
    "With NFTs, ticket authenticity can be easily verified,preventing counterfeiting and ensuring that only valid tickets are bought and sold."
  );
  function RenderLorem1() {
    return (
      <div>
        <p className="md:w-[85%] text-left text-[0.9rem] sm:text-[1rem] pt-8">
          {para}
        </p>
      </div>
    );
  }

  return (
    <div className="box-background relative flex justify-between p-8 w-[80%] rounded-xl bg-opacity-40 bg-blur-md">
      <div className="flex flex-col items-start sm:w-3/4">
        <h1 className="text-4xl sm:text-5xl mt-4 ">Our Mission</h1>
        <div className="flex flex-col sm:flex-row justify-around gap-4 pt-6">
          <button
            className="cursor-pointer text-[0.75rem] md:text-base bg-black/50 px-2 md:px-4 py-2 rounded-full hover:bg-black/20"
            onClick={() =>
              setPara(
                "With NFTs, ticket authenticity can be easily verified,preventing counterfeiting and ensuring that only valid tickets are bought and sold."
              )
            }
          >
            Ticketing
          </button>

          <button
            className="cursor-pointer text-[0.75rem] md:text-base bg-black/50 px-2 md:px-4 py-2 rounded-full hover:bg-black/20"
            onClick={() =>
              setPara("Put crypto in an escrow account to register for events.")
            }
          >
            RSVP Escrow
          </button>

          <button
            className="cursor-pointer text-[0.75rem] md:text-base bg-black/50 px-2 md:px-4 py-2 rounded-full hover:bg-black/20"
            onClick={() =>
              setPara("Attendee data to analyze engagement & improve events")
            }
          >
            Data Analysis
          </button>
        </div>
        <RenderLorem1 />
      </div>
      <div className="w-1/4 hidden sm:flex">
        <Image src="/dics.png" width="200" height="200" alt="discs" />
      </div>
    </div>
  );
};
export default Missions;
