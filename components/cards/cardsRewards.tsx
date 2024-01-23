/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import copy from "clipboard-copy";
import { currency } from "@/config";
import Link from "next/link";
import { fetchCurrentUsername } from "@/utils";
import "react-toastify/dist/ReactToastify.css";

const CardsReward = ({
  image,
  name,
  price,
  rewardId,
  toast,
}: {
  image: any;
  name: string;
  price: any;
  rewardId: any;
  toast: any;
}) => {
  //   const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    fetchUsernameData();
  }, []);

  async function fetchUsernameData() {
    const data = await fetchCurrentUsername();
    setUsername(data);
  }

  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await copy(textToCopy);
      toast.success("Copied to clipboard!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
    }
  };

  function CopytoClip(textToCopy: any) {
    return (
      <>
        <div className="flex  gap-2 text-[0.8rem] cursor-pointer">
          <img
            src="/copy.png"
            className={` ${
              isCopied
                ? "w-[20%] h-[20%] flex justify-center items-center"
                : "w-[45%]"
            }`}
            alt=""
            onClick={handleCopyClick}
          />
        </div>
      </>
    );
  }

  console.log("fds", rewardId);

  const textToCopy = "This is the text to be copied.";

  return (
    <>
      <div className="text-white w-[22%] px-4 box-background pt-4 pb-5 rounded-xl">
        <div className="flex flex-col gap-6">
          <img
            src={image}
            className="h-[250px] rounded-xl"
            // width="195"
            // height="200"
            alt="Event's Image"
          />
          <div className="flex gap-2 text-[0.85rem] flex-col">
            <div className="flex justify-between items-center">
              <p>{name}</p>
              <div className="flex justify-center items-center gap-1">
                <Link
                  href={`/rewards/${username}/${rewardId}`}
                  className="flex justify-end w-full text-sky-500 font-semibold hover:text-sky-700"
                >
                  <p>Link</p>
                </Link>
                <CopytoClip textToCopy={textToCopy} />
              </div>
              <p>{price == 0.0 ? "Free" : price + " " + currency}</p>
            </div>
            <div className="h-[2px] rounded-full bg-white"></div>
            <div className="flex justify-between items-center"></div>
            <div className="flex justify-center items-center">
              <Link href={`/dashboard/rewards/${rewardId}/manage`}>
                <p className="view-btn px-4 py-0.5 outline rounded-lg">
                  Add Whitelist
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardsReward;
