import { updateShortlist } from "@/utils";
import React, { useState } from "react";

export default function Manual(tokenId: any) {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  async function updateShortlistCall() {
    setLoading(true);
    await updateShortlist(tokenId.tokenId, [address]);
    setLoading(false);
  }

  return (
    <div className="flex flex-col justify-center items-center mt-8 gap-10">
      <div className="w-full flex flex-col">
        <label className="pb-3 text-[1.5rem] font-semibold">
          Wallet Address
        </label>
        <input
          type="text"
          id="event-name"
          placeholder="Wallet Address"
          className="bg-[#1E1E1E] bg-opacity-75 border border-[#989898] border-opacity-30 rounded-lg p-2"
          onChange={(e) => setAddress(e.target.value)}
        />
        <p className="text-white/50 mt-1">
          Enter wallet address to be added to shortlist
        </p>
      </div>

      <div className="w-[60%]">
        <button
          className="w-full subscribe-button hover:bg-[#44444400] px-5 py-1"
          onClick={updateShortlistCall}
        >
          Update
        </button>
      </div>
    </div>
  );
}
