import React from 'react'

export default function Manual() {
  return (
    <div className='flex flex-col justify-center items-center mt-20 gap-[10rem]'>
      <div className="w-full flex flex-col">
        <label className="pb-3 text-[1.5rem] font-semibold">Wallet Address</label>
        <input
            type="text"
            id="event-name"
            placeholder="Wallet Address"
            className="bg-[#1E1E1E] bg-opacity-75 border border-[#989898] border-opacity-30 rounded-lg p-2"
        />
        <p className="text-white/50 mt-1">Enter the wallet address tha will be shortlisted.</p>
       </div>

        <div className="w-[60%]">
            <button className="w-full subscribe-button hover:bg-[#44444400] px-5 py-1">Add Recipient</button>
        </div>
    </div>
  )
}
