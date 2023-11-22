"use client"
import React, { useState } from "react";
import Link from "next/link";

const CreateRewardPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-10">
          <div className="box-background p-12 rounded-xl flex flex-col w-[45%] justify-center items-center shadow-lg">
            <h2 className="text-3xl text-green-800 font-bold mb-4">Your Reward has been Created!!</h2>
              <p className="text-center">Go & Whitelist Attendees for the Event now!</p>
            <div className="flex gap-4">
            <Link href="/dashboard/rewards">
            <button
              onClick={togglePopup}
              className="mt-6 subscribe-button text-white font-bold py-2 px-4 rounded"
            >
              Whitelist
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
