"use client"
import React, { useState } from "react";
import Link from "next/link";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      {/* <button
        onClick={togglePopup}
        className="px-4 py-2 border rounded-lg"
      >
        Modal
      </button> */}
      {/* {isOpen && ( */}
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-10">
          <div className="box-background p-12 rounded-xl flex flex-col w-[40%] justify-center items-center shadow-lg">
            <h2 className="text-3xl text-green-800 font-bold mb-4">Your Spot has been Minted!!</h2>
              <p className="text-center">Go & Publish the Event now</p>
            <div className="flex gap-4">
            <Link href="/dashboard/minted">
            <button
              onClick={togglePopup}
              className="mt-6 subscribe-button text-white font-bold py-2 px-4 rounded"
            >
              Publish
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
      {/* )} */}
    </div>
  );
};

export default Popup;
