import React from 'react'

export default function Bulk(tokenId: any) {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className="w-full flex flex-col">
            <p className='text-white/80 mb-2'>Upload your CSV file to quickly shortlist users based on their details.</p>
            <p className='text-[#0094FFD9] text-[1.125rem] mb-6'>Download .CSV template</p>
            <label className="flex justify-center py-[5rem]  border bg-[#1E1E1E] bg-opacity-75 border-[#989898] border-opacity-30 rounded-xl cursor-pointer ">
                <div>
                    <p className="mb-2 text-base text-gray-500 dark:text-gray-400 font-semibold">Drop your CSV file here</p>
                </div>
                <input
                    type="file"
                    name="file_upload"
                    className="hidden"
                />
            </label>
        </div>
    </div>
  )
}
