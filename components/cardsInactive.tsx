"use client"
import Image from "next/image";
import { useState } from "react";
import { runEvent } from "@/utils"
import LoadingModal from "./LoadingModal";
import "react-toastify/dist/ReactToastify.css";

const CardsInactive = ({ image, name, tokenId,setInactiveEvents, toast }: { image: any, name: string, tokenId: any,setInactiveEvents:any, toast: any }) => {

  const [loading, setLoading] = useState(false)

  async function runEventCall(ticketId: any) {
    setLoading(true)
    await runEvent(ticketId)
    setTimeout(() => {
        setInactiveEvents((events:any)=>events.filter((event:any)=>event.tokenId!==tokenId));
    }, 3000);
    toast.success("Event Resumed!", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
    console.log("Running")
    setLoading(false)
  }

    return (
        <>
        <LoadingModal visible={loading}/>
        <div className="text-white w-[23%] px-4 box-background pt-4 pb-5 rounded-xl">
            <div className="flex flex-col gap-4">
                <img
                    src={image}
                    className="h-[250px] rounded-xl"
                    // width="195"
                    // height="200"
                    alt="Event&apos;s Image"
                    />
                <div className="flex text-[0.85rem] justify-between items-center gap-2">
                    <p>{name}</p>
                    {/* <p>1.20 Weth</p> */}
                    <button className="view-btn px-4 py-0.5 outline rounded-lg" onClick={() => runEventCall(tokenId)}>
                        Run
                    </button>
                </div>
                {/* <hr />
                <div className="flex justify-between my-6">
                    <p>End&apos;s In 01.34.45</p>
                    <button className="px-4 py-1 outline rounded-lg">
                    Run
                    </button>
                </div> */}
            </div>
        </div>
        </>
    );
};
export default CardsInactive;
