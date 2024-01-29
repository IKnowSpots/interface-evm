// "use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const QR: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <button onClick={togglePopup} className="">
        Generate QR
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 backdrop-blur-[4px] z-10">
          <div className="pop-background rounded-[0.6rem] flex flex-col w-[30%] justify-center items-center shadow-lg">
            <Image
              src={"/qr.png"}
              width={300}
              height={100}
              alt="success"
              className="mt-12"
            />
            <div className="flex justify-center items-center w-full bg-black bg-opacity-70 mt-6">
              <button
                onClick={togglePopup}
                className="w-full text-white text-lg font-semibold py-4 px-8 rounded flex justify-center items-center"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QR;
