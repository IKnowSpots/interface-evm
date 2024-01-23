"use client";
import { useState } from "react";
import { runEvent } from "@/utils";
import LoadingModal from "../LoadingModal";
import "react-toastify/dist/ReactToastify.css";

const CardsInactive = ({
  image,
  name,
  tokenId,
  setInactiveEvents,
  toast,
}: {
  image: any;
  name: string;
  tokenId: any;
  setInactiveEvents: any;
  toast: any;
}) => {
  const [loading, setLoading] = useState(false);

  async function runEventCall(ticketId: any) {
    setLoading(true);
    await runEvent(ticketId);
    setTimeout(() => {
      setInactiveEvents((events: any) =>
        events.filter((event: any) => event.tokenId !== tokenId)
      );
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
    console.log("Running");
    setLoading(false);
  }

  return (
    <>
      <LoadingModal visible={loading} />
      <div className="text-white w-[23%] px-4 box-background pt-4 pb-5 rounded-xl">
        <div className="flex flex-col gap-4">
          <img
            src={image}
            className="h-[250px] rounded-xl"
            // width="195"
            // height="200"
            alt="Event's Image"
          />
          <div className="flex text-[0.85rem] justify-between items-center gap-2">
            <p>{name}</p>
            <button
              className="view-btn px-4 py-0.5 outline rounded-lg"
              onClick={() => runEventCall(tokenId)}
            >
              Run
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardsInactive;
