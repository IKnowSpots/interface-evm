"use client";
import { uploadToIPFS, mint } from "@/utils";
import Image from "next/image";
import { useState, useEffect } from "react";
import CreateNav from "@/components/dashboard/CreateNav";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { redirect } from "next/navigation";
import FooterSection from "@/components/landing/FooterSection";
import { text } from "stream/consumers";
import PopUp from "@/components/Popup"

const Create = () => {
    const [formInput, setFormInput] = useState({
        name: "",
        description: "",
        venue: "",
        date: "",
        supply: "",
        cover: "",
        uri: "",
        isShortlistEnabled: false,
        isStakingEnabled: false,
        stakePrice: "0",
        eventPrice: "0",
    });

    const [isInputEnabled, setIsInputEnabled] = useState(false);

    const handleToggle = () => {
        setIsInputEnabled(!isInputEnabled);
    };

    // console.log(formInput);

    const [loading, setLoading] = useState(false);
    const [imgLoading, setImgLoading] = useState(false);
    const [enableInput, setEnableInput] = useState(true);
    const [popUpVisible,setPopUpVisible] = useState(false);
    const toggleInput = () => {
      setEnableInput(!enableInput);
    };

    const [val, setVal] = useState("");
    const [word, setWord] = useState(0);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const data = e.target.value.split(" ");
        // console.log(data);

        if (data.length <= 160) {
            setVal(e.target.value);
            setWord(data.length);
            if (e.target.value == "") {
                setWord(0);
            }
        } else {
            alert("you can type only 1000 characters");
        }
    };

    async function formURI() {
        let { name, description, venue, date, supply, cover } = formInput;
        if (!name || !description || !venue || !date || !supply) return;
        console.log(cover)
        if (cover == "") {
            cover = "https://ipfs.io/ipfs/bafybeiheek47zlbg5kklzdz572mm7pu7men2xo5pra3cslbqplkda2qphq/cat.jpeg";
        }
        const data = JSON.stringify({ name, description, venue, date, cover });
        const files = [new File([data], "data.json")];
        const metaCID = await uploadToIPFS(files);
        const url = `https://ipfs.io/ipfs/${metaCID}/data.json`;
        setFormInput({ ...formInput, uri: url });
        console.log(url);
        return url;
    }

    async function changeImage(e: any) {
        setImgLoading(true);
        const inputFile = e.target.files[0];
        const inputFileName = e.target.files[0].name;
        const files = [new File([inputFile], inputFileName)];
        const metaCID = await uploadToIPFS(files);
        const url = `https://ipfs.io/ipfs/${metaCID}/${inputFileName}`;
        console.log(url);
        setFormInput({ ...formInput, cover: url });
        setImgLoading(false);
    }

    async function publish() {
        // try {
            setLoading(true);
            const NftURI = await formURI();
            let floatNumber = parseFloat(formInput.stakePrice);
            const isMinted = await mint(
                floatNumber.toString(),
                formInput.supply,
                formInput.isShortlistEnabled,
                formInput.isStakingEnabled,
                NftURI
            );
            
            // if (isMinted == true) {
            //     setPopUpVisible(true);
            // }
            
            setLoading(false);
        // } catch (error) {
        //     toast.warn("Error occurred, try again in a while!", {
        //         position: "top-center",
        //         autoClose: 5000,
        //         hideProgressBar: true,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //         theme: "dark",
        //     });
        // }
    }

    return (
        <div className="bg-createEvent text-white  px-8">
            <CreateNav />
            <div className="grid grid-cols-2 mb-20">
                <div className="">
                    <div>
                        <div className="flex flex-col w-1/2 mx-auto justify-center">
                            <div className="flex items-center w-full">
                                <div className="relative w-[20%] flex justify-center">
                                    <Link
                                        href="/dashboard/rewards"
                                        className="w-full p-4"
                                    >
                                        <Image
                                            src={"/icons/back-btn.svg"}
                                            width={30}
                                            height={20}
                                            alt="back-btn"
                                            className="back-btn"
                                        />
                                    </Link>
                                </div>
                                <p className="text-3xl my-3 ">
                                    Create a Reward
                                </p>
                            </div>
                            <div className="my-3 ">
                                <p className="text-xl ">Upload a file</p>
                                <p className="text-white opacity-40">
                                    Upload or choose your file to upload
                                </p>
                            </div>
                            <label className="flex justify-center py-36 w-96 mx-auto mt-4 border-2 bg-[#1E1E1E] bg-opacity-75 border-[#E0E0E0] border-opacity-40 border-dashed  rounded-md  cursor-pointer ">
                                <span className="flex items-center ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-gray"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                        />
                                    </svg>
                                </span>
                                {imgLoading ? (
                                    <div>Uploading to IPFS..</div>
                                ) : formInput.cover == "" ? (
                                    <div>
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                            <span className="font-semibold">
                                                Click to upload
                                            </span>{" "}
                                            or drag and drop
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            SVG, PNG, JPG or GIF (MAX.
                                            800x400px)
                                        </p>
                                    </div>
                                ) : (
                                    <div>We got your image</div>
                                )}
                                <input
                                    type="file"
                                    name="file_upload"
                                    className="hidden"
                                    onChange={changeImage}
                                    disabled={imgLoading}
                                />
                            </label>
                            <div className="flex justify-center mt-4 gap-4 items-center">
                            <Image
                                    src={"/cattt.jpeg"}
                                    width={60}
                                    height={60}
                                    alt="cat"
                                    className="rounded-lg"
                                />
                                <p className="text-white opacity-40">default cover image</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-16">
                    <div className="flex flex-col w-3/4 mx-auto  ">
                        <div className="pt-4 flex justify-between">
                            <div className="w-full flex justify-between items-baseline">
                                <div className={`w-full flex flex-col min-h-[4rem]`}>
                                    <label className="pb-2 text-lg font-semibold">Money Bound</label>
                                    <input
                                        type="text"
                                        className={`bg-[#1E1E1E] bg-opacity-75 border border-[#989898] border-opacity-30 rounded-lg p-2 mb-6 ${!isInputEnabled ? "hidden" : ""}`}
                                        placeholder="Enter the Amount"
                                        disabled={!isInputEnabled}
                                    />
                                </div>
                                <div
                                    className={`flex items-center justify-end cursor-pointer`}
                                >
                                    <div
                                        className={`w-12 h-6 bg-[#1E1E1E] rounded-full p-1 duration-300 ease-in-out ${
                                            isInputEnabled
                                                ? "bg-green-500"
                                                : "bg-[#1E1E1E]"
                                        }`}
                                        onClick={handleToggle}
                                    >
                                        <div
                                            className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
                                                isInputEnabled
                                                    ? "translate-x-6"
                                                    : ""
                                            }`}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <label className="pb-2 w-[90%] text-lg font-semibold">Reward Name</label>
                        <input
                            type="text"
                            id="event-name"
                            placeholder="eg. name of the reward"
                            className="bg-[#1E1E1E] w-[90%] bg-opacity-75 border border-[#989898] border-opacity-30 rounded-lg p-2 mb-6"
                            onChange={(e) => {
                                setFormInput({
                                    ...formInput,
                                    name: e.target.value,
                                });
                            }}
                            disabled={imgLoading}
                        />

                        <label className="pb-2 w-[90%] text-lg font-semibold">Description</label>
                        <textarea
                            placeholder="Description here"
                            className="bg-[#1E1E1E] w-[90%] bg-opacity-75 border border-[#989898] border-opacity-30 rounded-lg resize-none p-2 mb-6"
                            onChange={(e) => {
                                setFormInput({
                                    ...formInput,
                                    description: e.target.value,
                                });
                                handleChange(e);
                            }}
                            disabled={imgLoading}
                            //   change this if scroll bar is appearing
                            rows={4}
                        ></textarea>

                        <label className="pb-2 w-[90%] text-lg font-semibold">Supply</label>
                        <input
                            type="text"
                            id="event-name"
                            placeholder="2000"
                            className="bg-[#1E1E1E] w-[90%] bg-opacity-75 border border-[#989898] border-opacity-30 rounded-lg p-2 mb-6"
                            onChange={(e) =>
                                setFormInput({
                                    ...formInput,
                                    supply: e.target.value,
                                })
                            }
                            disabled={imgLoading}
                        />

                        <div className="flex justify-center items-center w-[90%] mt-4">
                            <button className="px-4 py-2 w-[6rem] border rounded-lg flex justify-center items-center">
                                Publish
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            
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
            {/* {popUpVisible ? <PopUp/> : <></> } */}
            
            <FooterSection />
        </div>
    );
};

export default Create;
