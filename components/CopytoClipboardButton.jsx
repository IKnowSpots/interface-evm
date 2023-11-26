"use client"
import { useState } from 'react';
import copy from 'clipboard-copy';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CopyToClipboardButton = ({ textToCopy }) => {

  const handleCopyClick = async () => {
    try {
      await copy(textToCopy);
      toast.success('Copied to clipboard!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
    }
  };

  return (
    <div className='flex flex-col cursor-pointer'>
      <img src="/copy.png" className="w-[35%]" alt="" onClick={handleCopyClick} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default CopyToClipboardButton;
