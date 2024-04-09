/* eslint-disable @next/next/no-img-element */
"use client";
import { uploadToIPFS, mintReward } from "@/utils";
import Image from "next/image";
import { useState } from "react";
import CreateNav from "@/components/navbar/CreateNav";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FooterSection from "@/components/landing/FooterSection";
import CreateRewardPopup from "@/components/CreateRewardPopup";
import Select from "react-select";
import LoadingModal from "@/components/LoadingModal";

interface Option {
  value: string;
  imageUrl: string;
}

const Create = () => {
  const [avtarInfo] = useState([
    {
      index: 0,
      cover:
        "https://ipfs.io/ipfs/bafybeiheek47zlbg5kklzdz572mm7pu7men2xo5pra3cslbqplkda2qphq/cat.jpeg",
    },
    {
      index: 1,
      cover:
        "https://bafybeiftunmz7iav27vsvlzxkgkyg7faqo3jhy6kxi7mhbfcjuowcnqq4m.ipfs.w3s.link/reward-1.png",
    },
    {
      index: 2,
      cover:
        "https://bafybeibgjvh46xftnimz3cxtwjugu4j4mzl7ooh672ed6pn7e26baeisli.ipfs.w3s.link/reward-2.png",
    },
    {
      index: 3,
      cover:
        "https://bafybeicya3qw6wbrgynir7ilvf2ur47k5h2vbj2wrqzqnddlv4i55r64pi.ipfs.w3s.link/reward-3.png",
    },
    // {
    //   index: 4,
    //   cover:
    //     "https://ipfs.io/ipfs/bafybeicl6fv6nuyladn3zril5lge4kz2oc7yjqz3x6xwwnx5otrqi5kv2m/dash-4.jpg",
    // },
  ]);

  function setAvatar(cover: any) {
    setFormInput({ ...formInput, cover });
    console.log(cover);
  }

  const options: Option[] = [
    { value: "Matic", imageUrl: "/matic.png" },
    { value: "Ethereum", imageUrl: "/ethereum.png" },
  ];

  const [selectedOption, setSelectedOption] = useState<Option>(options[0]);

  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      background: "#1E1E1E",
      border: "1px solid rgba(152, 152, 152, 0.3) ",
      borderRadius: "8px",
      boxShadow: state.isFocused ? "0 0 0 1px #1E1E1E" : "none",
      cursor: "pointer",
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
      backgroundColor: "#f0f0f0",
      color: "black",
      cursor: "pointer",
    }),
    singleValue: (provided: any) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
      color: "white", // Set the text color
    }),
  };

  const handleOp = (option: any) => {
    if (option && !Array.isArray(option)) {
      setSelectedOption(option);
    }
  };

  const [formInput, setFormInput] = useState({
    supply: "",
    name: "",
    isCryptoBound: false,
    price: "0",
    cover: "",
  });

  console.log(formInput);

  const handleToggle = () => {
    if (formInput.isCryptoBound == true) {
      setFormInput({ ...formInput, isCryptoBound: false });
    } else {
      setFormInput({ ...formInput, isCryptoBound: true });
    }
  };

  const [loading, setLoading] = useState(false);
  const [imgLoading, setImgLoading] = useState(false);
  // const [enableInput, setEnableInput] = useState(true);
  const [popUpVisible, setPopUpVisible] = useState(false);

  async function formURI() {
    let { supply, name, isCryptoBound, price, cover } = formInput;
    if (!supply || !name) return;
    if (cover == "") {
      console.log("4");
      cover =
        "https://ipfs.io/ipfs/bafybeiheek47zlbg5kklzdz572mm7pu7men2xo5pra3cslbqplkda2qphq/cat.jpeg";
    }
    const data = JSON.stringify({ supply, name, isCryptoBound, cover });
    const files = [new File([data], "data.json")];
    console.log("files", files);
    const metaCID = await uploadToIPFS(files);
    console.log(metaCID, "cid");
    const url = `https://${metaCID}.ipfs.w3s.link/data.json`;
    console.log("inside here");
    console.log(url, "here is URL");
    return url;
  }

  async function changeImage(e: any) {
    setImgLoading(true);
    const inputFile = e.target.files[0];
    const inputFileName = e.target.files[0].name;
    const files = [new File([inputFile], inputFileName)];
    const metaCID = await uploadToIPFS(files);
    const url = `https://${metaCID}.ipfs.w3s.link/${inputFileName}`;
    console.log(url);
    setFormInput({ ...formInput, cover: url });
    setImgLoading(false);
  }

  async function publish() {
    setLoading(true);
    const NftURI = await formURI();
    console.log(NftURI, "here is URI");
    let floatNumber = parseFloat(formInput.price);
    const isMinted = await mintReward(
      formInput.supply,
      NftURI,
      formInput.isCryptoBound,
      floatNumber.toString()
    );

    if (isMinted == true) {
      toast.success("Reward Created!", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setPopUpVisible(true);
    }

    setLoading(false);
  }

  return (
    <>
      <LoadingModal visible={loading} />
      <div className="bg-createEvent text-white  px-8">
        <CreateNav />
        <div className="grid grid-cols-2 mb-20">
          <div className="">
            <div className="flex justify-center items-center">
              <div
                className={`flex flex-col justify-center ${formInput.cover ? "" : "w-[60%]"
                  }`}
              >
                <div className="flex items-center w-full">
                  <div className="relative w-[20%] flex justify-center">
                    {/* Route fix: temparary fixing to dashboard */}
                    <Link href="/dashboard" className="w-full p-4">
                      <Image
                        src={"/icons/back-btn.svg"}
                        width={30}
                        height={20}
                        alt="back-btn"
                        className="back-btn"
                      />
                    </Link>
                  </div>
                  <p className="text-3xl my-3 ">Create a Reward</p>
                </div>
                <div className="my-3 ">
                  <p className="text-xl ">Upload a file</p>
                  <p className="text-white opacity-40">
                    Upload or choose your file to upload
                  </p>
                </div>
                <label
                  className={`flex justify-center bg-[rgb(30,30,30)] bg-opacity-75 rounded-md  cursor-pointer ${formInput.cover
                    ? ""
                    : "border-2 border-dashed border-[#E0E0E0] border-opacity-40 py-40 px-0"
                    } `}
                >
                  <span className="flex items-center ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-6 h-6 text-gray ${formInput.cover ? "hidden" : "flex"
                        } `}
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
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                  ) : (
                    <div>
                      <img
                        src={formInput.cover}
                        alt="uploaded-cover"
                        className="rounded-lg h-[350px] w-full"
                      />
                    </div>
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
                    width={50}
                    height={50}
                    alt="cat"
                    onClick={() => setAvatar(avtarInfo[0].cover)}
                    className="rounded-lg cursor-pointer"
                  />
                  <Image
                    src={"/reward-1.png"}
                    width={50}
                    height={50}
                    alt="cat"
                    onClick={() => setAvatar(avtarInfo[1].cover)}
                    className="rounded-lg cursor-pointer"
                  />
                  <Image
                    src={"/reward-2.png"}
                    width={50}
                    height={50}
                    alt="cat"
                    onClick={() => setAvatar(avtarInfo[2].cover)}
                    className="rounded-lg cursor-pointer"
                  />
                  <Image
                    src={"/reward-3.png"}
                    width={50}
                    height={50}
                    alt="cat"
                    onClick={() => setAvatar(avtarInfo[3].cover)}
                    className="rounded-lg cursor-pointer"
                  />
                  {/* <Image
                  src={"/dash-4.jpg"}
                  width={50}
                  height={50}
                  alt="cat"
                  onClick={() => setAvatar(avtarInfo[4].cover)}
                  className="rounded-lg cursor-pointer"
                /> */}
                </div>
              </div>
            </div>
          </div>

          <div className="py-16 min-h-[30rem]">
            <div className="flex flex-col w-3/4 mx-auto  ">
              <div className="pt-4 flex justify-between">
                <div className="w-full flex justify-between items-baseline">
                  <div className={`w-full flex flex-col min-h-[3rem]`}>
                    <label className="pb-2 text-lg font-semibold">
                      Crypto Bound
                    </label>
                  </div>
                  <div
                    className={`flex items-center justify-end cursor-pointer`}
                  >
                    <div
                      className={`w-12 h-6 bg-[#1E1E1E] rounded-full p-1 duration-300 ease-in-out ${formInput.isCryptoBound
                        ? "bg-green-500"
                        : "bg-[#1E1E1E]"
                        }`}
                      onClick={handleToggle}
                    >
                      <div
                        className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${formInput.isCryptoBound ? "translate-x-6" : ""
                          }`}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <label className="pb-2 w-[90%] text-lg font-semibold">
                Reward Name
              </label>
              <input
                type="text"
                id="reward-name"
                placeholder="eg. Discord Trivia 23rd Oct"
                className="bg-[#1E1E1E] w-[90%] bg-opacity-75 border border-[#989898] border-opacity-30 rounded-lg p-2 mb-6"
                onChange={(e) => {
                  setFormInput({
                    ...formInput,
                    name: e.target.value,
                  });
                }}
                disabled={imgLoading}
              />

              <label className="pb-2 w-[90%] text-lg font-semibold">
                Supply
              </label>
              <input
                type="text"
                id="c"
                placeholder="5"
                className="bg-[#1E1E1E] w-[90%] bg-opacity-75 border border-[#989898] border-opacity-30 rounded-lg p-2 mb-6"
                onChange={(e) =>
                  setFormInput({
                    ...formInput,
                    supply: e.target.value,
                  })
                }
                disabled={imgLoading}
              />

              {/* comment out this section when price functionality is toh be used and integrated */}

              <div
                className={` flex justify-between w-[90%] ${!formInput.isCryptoBound ? "hidden" : ""
                  } `}
              >
                <div className="flex flex-col w-[60%] my-4">
                  <label className={`pb-2 text-lg font-semibold`}>Price</label>
                  <input
                    type="text"
                    id="event-name"
                    placeholder="0.01"
                    className="bg-[#1E1E1E] bg-opacity-75 border border-[#989898] border-opacity-30 w-full rounded-lg p-2 "
                    onChange={(e) =>
                      setFormInput({
                        ...formInput,
                        price: e.target.value,
                      })
                    }
                    disabled={imgLoading}
                  />
                </div>
                <div className="flex flex-col w-[35%] my-4 cursor-pointer">
                  <label className="text-center pb-2 text-lg font-semibold">
                    Token
                  </label>
                  <Select
                    options={options}
                    value={selectedOption}
                    onChange={handleOp}
                    getOptionLabel={(option) =>
                      (
                        <div>
                          {option.imageUrl && (
                            <img
                              src={option.imageUrl}
                              alt={option.value}
                              className="inline-block h-6 w-6 mr-2"
                            />
                          )}
                          {option.value}
                        </div>
                      ) as unknown as string
                    }
                    getOptionValue={(option) => option.value}
                    styles={customStyles}
                  />
                </div>
              </div>

              <div className="flex justify-center items-center w-[90%] mt-4">
                <button
                  className="px-4 py-2 w-[6rem] border rounded-lg flex justify-center items-center"
                  onClick={publish}
                >
                  Publish
                </button>
                {/* <CreateRewardPopup/> */}
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
        {popUpVisible ? <CreateRewardPopup /> : <></>}
        <div className="relative z-0">
          <FooterSection />
        </div>
      </div>
    </>
  );
};

export default Create;
