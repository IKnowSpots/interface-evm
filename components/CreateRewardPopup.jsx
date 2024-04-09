"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const CreateRewardPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 backdrop-blur-[4px] z-10">
        <div className="pop-background rounded-[0.6rem] flex flex-col w-[50%] justify-center items-center shadow-lg">
          <Image
            src={"/success.gif"}
            width={150}
            height={100}
            alt="success"
            className=""
          />
          {/* <h2 className="text-3xl text-green-800 font-bold mb-4">
            Your Reward has been Created!!
          </h2> */}
          <p className="text-center">
            Go & Whitelist Attendees for the Event now!
          </p>
          <div className="flex justify-center items-center w-full bg-black bg-opacity-70 mt-6">
            {/* Route fix: temparary redirecting to dashboard */}
            <Link href="/dashboard" className="w-full">
              <button
                onClick={togglePopup}
                className="w-full text-white text-lg font-semibold py-4 px-8 rounded flex justify-between items-center"
              >
                <p>Whitelist</p>
                <Image
                  src={"/icons/arrow.svg"}
                  width={20}
                  height={20}
                  alt="go"
                  className="rotate-180"
                />
              </button>
            </Link>
            {/* <button
              onClick={togglePopup}
              className="mt-6 subscribe-button text-white font-bold py-2 px-4 rounded"
            >
              Close Popup
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRewardPopup;
