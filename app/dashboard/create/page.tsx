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

    const toggleSwitch = () => {
        if (formInput.isShortlistEnabled == true) {
            setFormInput({ ...formInput, isShortlistEnabled: false });
        } else {
            setFormInput({ ...formInput, isShortlistEnabled: true });
        }
    };

    console.log(formInput);

    const [loading, setLoading] = useState(false);
    const [imgLoading, setImgLoading] = useState(false);
    const [isFieldDisabled, setIsFieldDisabled] = useState(false);
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const handleBothClicks = () => {
        setIsButtonClicked(!isButtonClicked);
        setIsFieldDisabled(!isFieldDisabled);
    };

    const enableButton = () => {
        handleBothClicks();
        setFormInput({ ...formInput, isStakingEnabled: true });
    };

    const disableButton = () => {
        handleBothClicks();
        setFormInput({ ...formInput, isStakingEnabled: false, stakePrice: "0" });
    };

    const [val, setVal] = useState("");
    const [word, setWord] = useState(0);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const data = e.target.value.split(" ");
        console.log(data);

        if (data.length <= 100) {
            setVal(e.target.value);
            setWord(data.length);
            if (e.target.value == "") {
                setWord(0);
            }
        } else {
            alert("you can type only 400 words");
        }
    };

    async function formURI() {
        const { name, description, venue, date, supply, cover } = formInput;
        if (!name || !description || !venue || !date || !supply) return;
        if (!cover) {
            formInput.cover = "/bored_ape_image.png";
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
        try {
            setLoading(true);
            const NftURI = await formURI();
            const isMinted = await mint(
                formInput.stakePrice,
                formInput.supply,
                formInput.isShortlistEnabled,
                formInput.isStakingEnabled,
                NftURI
            );
            if (isMinted == true) {
                toast.success("Minted!", {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }
            setLoading(false);
        } catch (error) {
            toast.warn("Error occurred, try again in a while!", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }

    return (
        <div className="bg-createEvent text-white  px-8">
            <CreateNav />
            <div className="grid grid-cols-2">
                <div className="">
                    <div>
                        <div className="flex flex-col w-1/2 mx-auto justify-center">
                            <div className="flex items-center w-full">
                                <div className="relative w-[20%] flex justify-center">
                                    <Link
                                        href="/dashboard/active"
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
                                    Create an Event
                                </p>
                            </div>
                            <div className="my-3 ">
                                <p className="text-xl ">Upload a file</p>
                                <p className="text-white opacity-40">
                                    Upload or choose your file to upload
                                </p>
                            </div>
                            <label className="flex justify-center py-44 w-96 mx-auto  border-2 bg-[#1E1E1E] bg-opacity-75 border-[#E0E0E0] border-opacity-40 border-dashed  rounded-md  cursor-pointer ">
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
                            <div className="flex justify-around my-8  ">
                                <Image
                                    src={"/bored_ape_image.png"}
                                    width={60}
                                    height={60}
                                    alt="bored ape nft"
                                    className="rounded-lg"
                                />
                                <Image
                                    src={"/bored_ape_image.png"}
                                    width={60}
                                    height={60}
                                    alt="bored ape nft"
                                    className="rounded-lg"
                                />
                                <Image
                                    src={"/bored_ape_image.png"}
                                    width={60}
                                    height={60}
                                    alt="bored ape nft"
                                    className="rounded-lg"
                                />
                                <Image
                                    src={"/bored_ape_image.png"}
                                    width={60}
                                    height={60}
                                    alt="bored ape nft"
                                    className="rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-16">
                    <div className="flex flex-col w-3/4 mx-auto  ">
                        <div className="py-4 flex justify-between">
                            <div className="w-full flex justify-between">
                                <div>
                                    <h3 className="text-xl">
                                        Shortlist events
                                    </h3>
                                    <p className="opacity-40">
                                        Display this on feature section of
                                        landing page.
                                    </p>
                                </div>
                                <div
                                    className={`flex items-center cursor-pointer`}
                                >
                                    <div
                                        className={`w-12 h-6 bg-[#1E1E1E] rounded-full p-1 duration-300 ease-in-out ${
                                            formInput.isShortlistEnabled
                                                ? "bg-green-500"
                                                : "bg-[#1E1E1E]"
                                        }`}
                                        onClick={toggleSwitch}
                                    >
                                        <div
                                            className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
                                                formInput.isShortlistEnabled
                                                    ? "translate-x-6"
                                                    : ""
                                            }`}
                                        ></div>
                                    </div>
                                    {/* <span className="ml-2 text-sm">{isShortlistEnabled ? 'ON' : 'OFF'}</span> */}
                                </div>
                            </div>
                            {/* https://gdowens.github.io/react-toggle-button/ to use toggle in the actual code */}
                            {/* <ToggleButton value={false} /> */}
                        </div>
                        <label className="pb-2">Event Name</label>
                        <input
                            type="text"
                            id="event-name"
                            placeholder="eg. name of the event"
                            className="bg-[#1E1E1E] bg-opacity-75 border border-[#989898] border-opacity-30 rounded-lg p-2"
                            onChange={(e) => {
                                setFormInput({
                                    ...formInput,
                                    name: e.target.value,
                                });
                            }}
                            disabled={imgLoading}
                        />
                    </div>
                    <div className="flex flex-col w-3/4 mx-auto my-4">
                        <label className="pb-2">Description</label>
                        <textarea
                            placeholder="Description here"
                            className="bg-[#1E1E1E] bg-opacity-75 border border-[#989898] border-opacity-30 rounded-lg resize-none p-2"
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
                        <p className="right-0 text-gray-400">
                            {" "}
                            {val.length}/1000
                        </p>
                    </div>

                    <div className=" flex w-3/4 mx-auto  ">
                        <div className="flex flex-col w-3/4 mx-auto my-4 mr-6 ">
                            <label className="pb-2">Supply</label>
                            <input
                                type="text"
                                id="event-name"
                                placeholder="2000"
                                className="bg-[#1E1E1E] bg-opacity-75 border border-[#989898] border-opacity-30 w-full rounded-lg p-2 "
                                onChange={(e) =>
                                    setFormInput({
                                        ...formInput,
                                        supply: e.target.value,
                                    })
                                }
                                disabled={imgLoading}
                            />
                        </div>
                        <div className="flex flex-col w-3/4 mx-auto my-4">
                            <label className="pb-2">Venue</label>
                            <input
                                type="text"
                                id="event-name"
                                placeholder="Example Text"
                                className="bg-[#1E1E1E] bg-opacity-75 border border-[#989898] border-opacity-30 rounded-lg p-2"
                                onChange={(e) =>
                                    setFormInput({
                                        ...formInput,
                                        venue: e.target.value,
                                    })
                                }
                                disabled={imgLoading}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col w-3/4 mx-auto my-4 ">
                        <label className="pb-2">Date</label>
                        <input
                            type="date"
                            id="event-name"
                            className="bg-[#E1E1E1] text-black invert bg-opacity-75 border border-[#676767] border-opacity-30  rounded-lg p-2"
                            onChange={(e) =>
                                setFormInput({
                                    ...formInput,
                                    date: e.target.value,
                                })
                            }
                            disabled={imgLoading}
                        />
                    </div>
                    {/*  */}

                    {/* <div className="flex flex-col w-3/4 mx-auto my-4 ">
                        <label>Stake price</label>
                        <div className="">
                            <input
                                type="text"
                                id="event-name"
                                placeholder="0.01ETH"
                                className="bg-[#1E1e1ea6] rounded-lg  relative p-2"
                                onChange={(e) =>
                                    setFormInput({
                                        ...formInput,
                                        stakePrice: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div> */}

                    {/*  */}
                    <div className="flex flex-col w-3/4 mx-auto my-4 ">
                        <label className="pb-2">Stake price</label>
                        <div className="relative flex flex-col items-center  w-full ">
                            <input
                                type="text"
                                id="event-name"
                                placeholder="0.01 ETH"
                                className={`border bg-[#1E1E1E] text-white bg-opacity-75 border-[#989898] border-opacity-30 rounded-lg p-2 w-full py-4 ${
                                    isFieldDisabled
                                        ? "bg-gray-300 text-gray-600"
                                        : " text-black"
                                }`}
                                // className="bg-[#1E1E1E] bg-opacity-75 border border-[#989898] border-opacity-30 rounded-lg p-2 w-full py-4"
                                disabled={isFieldDisabled && imgLoading}
                                onChange={(e) =>
                                    setFormInput({
                                        ...formInput,
                                        stakePrice: e.target.value,
                                    })
                                }
                                // disabled={imgLoading}
                                // disabled = "true"
                            />
                            <button
                                className={`border w-1/6 absolute right-24 my-3 mr-4 px-4 py-1 rounded-lg bg-[#252542] border-[#1E1E1ED9] ${
                                    isButtonClicked
                                        ? "bg-[#252542] text-white"
                                        : "bg-white text-black"
                                }`}
                                onClick={enableButton}
                            >
                                Enable
                            </button>
                            <button
                                className={`w-1/6 absolute right-2 my-3 px-4 py-1 rounded-lg border-[#1E1E1ED9] ${
                                    isButtonClicked
                                        ? "bg-white text-black"
                                        : "bg-[#252542] text-white"
                                }`}
                                onClick={disableButton}
                            >
                                Disable
                            </button>
                        </div>
                    </div>
                    <div className="w-3/4 mx-auto flex justify-evenly my-6">
                        {/* <button className="px-4 py-2 border rounded-lg">
                            Preview
                        </button> */}
                        <button
                            className="px-4 py-2 border rounded-lg"
                            onClick={publish}
                        >
                            Publish
                        </button>
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
            <FooterSection />
        </div>
    );
};

export default Create;
