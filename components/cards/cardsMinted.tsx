"use client";
import { useState } from "react";
import { publishTickets } from "@/utils";
import LoadingModal from "../LoadingModal";
import "react-toastify/dist/ReactToastify.css";

const CardsMinted = ({
  image,
  name,
  tokenId,
  supply,
  setMintedCollection,
  toast,
}: {
  image: any;
  name: string;
  tokenId: any;
  supply: any;
  setMintedCollection: any;
  toast: any;
}) => {
  const [loading, setLoading] = useState(false);

  async function publishTicketsCall(tokenId: any) {
    setLoading(true);
    await publishTickets(tokenId);
    setTimeout(() => {
      setMintedCollection((events: any) =>
        events.filter((event: any) => event.tokenId !== tokenId)
      );
    }, 3000);
    toast.success("Event Published!", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    console.log("Published");
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
          <div className="flex text-base flex-col justify-center items-center w-full gap-2">
            <div className="flex justify-between w-full">
              <p>{name}</p>
              <p>supply: {supply}</p>
            </div>
            <button
              className="view-btn px-4 py-0.5 outline rounded-lg"
              onClick={() => publishTicketsCall(tokenId)}
            >
              Publish
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardsMinted;
