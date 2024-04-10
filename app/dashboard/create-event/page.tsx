"use client";
import { mint, uploadToPinataIPFS } from "@/utils";
import Image from "next/image";
import { useContext, useState } from "react";
import CreateNav from "@/components/navbar/CreateNav";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FooterSection from "@/components/landing/FooterSection";
import PopUp from "@/components/Popup";
import LoadingModal from "@/components/LoadingModal";
import { SectionContext } from "../ContextProvider";
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
        "https://ipfs.io/ipfs/bafybeifocgqvlmvyxc7w5z7parm2xymykjzgtqdfxufpic3jlilian2i54/dash-1.jpg",
    },
    {
      index: 2,
      cover:
        "https://ipfs.io/ipfs/bafybeidovjvhgowhbisny2sw3u7bh6iwbwirueydzlnytf4yackvg7i5rm/dash-2.jpg",
    },
    {
      index: 3,
      cover:
        "https://ipfs.io/ipfs/bafybeibvng6hhiwzranrs7hxmreukii4w4a6mvkgadhxpvbfitsjukc3ba/dash-3.jpg",
    },
    {
      index: 4,
      cover:
        "https://ipfs.io/ipfs/bafybeicl6fv6nuyladn3zril5lge4kz2oc7yjqz3x6xwwnx5otrqi5kv2m/dash-4.jpg",
    },
  ]);
  const SidebarActiveElementState = useContext(SectionContext)

  console.log(SidebarActiveElementState)
  function setAvatar(cover: any) {
    setFormInput({ ...formInput, cover });
    console.log(cover);
  }

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

  const today = new Date();
  today.setDate(today.getDate() + 1); // Set to tomorrow

  const minDate = new Date().toISOString().split("T")[0]; // Get current date in YYYY-MM-DD format

  const toggleSwitch = () => {
    if (formInput.isShortlistEnabled == true) {
      setFormInput({ ...formInput, isShortlistEnabled: false });
    } else {
      setFormInput({ ...formInput, isShortlistEnabled: true });
    }
  };

  const [loading, setLoading] = useState(false);
  const [imgLoading, setImgLoading] = useState(false);
  const [enableInput, setEnableInput] = useState(true);
  const [popUpVisible, setPopUpVisible] = useState(false);

  const enableButton = () => {
    setEnableInput(true);
    setFormInput({ ...formInput, isStakingEnabled: true });
  };

  const disableButton = () => {
    setEnableInput(false);
    setFormInput({ ...formInput, isStakingEnabled: false, stakePrice: "0" });
  };

  const [val, setVal] = useState("");
  const [word, setWord] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const data = e.target.value.split(" ");

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
    console.log(cover);
    if (cover == "") {
      cover =
        "https://ipfs.io/ipfs/bafybeiheek47zlbg5kklzdz572mm7pu7men2xo5pra3cslbqplkda2qphq/cat.jpeg";
    }
    const data = JSON.stringify({ name, description, venue, date, cover });
    const file = new File([data], "data.json");
    // const pinataData = new FormData();
    // pinataData.set('file', file);
    // const uploadToPinata = await fetch('/api/files', {
    //   method: 'POST',
    //   body: pinataData
    // });
    // console.log("Hello from formURI")
    // console.log(uploadToPinata)
    console.log(file)
    const metaCID = await uploadToPinataIPFS(file);
    const url = `https://plum-abstract-tern-191.mypinata.cloud/ipfs/${metaCID}?pinataGatewayToken=bk0ge8Y_nSn2kavXs9HcA8OEaYDbNVhQ_U0Ku6vfaPphY9paKnbsvbW1Wmdhqwvq`;
    console.log('uri url', url)
    setFormInput({ ...formInput, uri: url });
    console.log(url);
    return url;
  }

  async function changeImage(e: any) {
    setImgLoading(true);
    const inputFile = e.target.files[0];
    const inputFileName = e.target.files[0].name;
    const files = [new File([inputFile], inputFileName)];
    console.log(inputFile);
    const metaCID = await uploadToPinataIPFS(inputFile);
    const url = `https://ipfs.io/ipfs/${metaCID}`;
    console.log(url);
    setFormInput({ ...formInput, cover: url });
    setImgLoading(false);
  }
  console.log(formInput.cover)
  async function publish() {
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
    if (isMinted == true) {
      if (SidebarActiveElementState != null)
        //@ts-ignore
        SidebarActiveElementState.setActiveElement('MintedPage')
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
      setPopUpVisible(true);
    }

    setLoading(false);
  }

  return (
    <>
      <LoadingModal visible={loading} />
      <div className="bg-createEvent text-white  px-8">
        <CreateNav />
        <div className="grid grid-cols-2">
          <div className="">
            <div className="flex justify-center items-center">
              <div
                className={`flex flex-col justify-center ${formInput.cover ? "" : "w-[60%]"
                  }`}
              >
                <div className="flex items-center w-full">
                  <div className="relative w-[20%] flex justify-center">
                    <Link href="/dashboard" className="w-full p-4">
                      <Image
                        src={"/icons/back-btn.svg"}
                        width={40}
                        height={20}
                        alt="back-btn"
                        className="back-btn"
                      />
                    </Link>
                  </div>
                  <p className="text-3xl my-3 ">Create an Event</p>
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
                    : "border-2 border-[#E0E0E0] border-opacity-40 border-dashed py-40 px-0"
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
                  ) : formInput.cover == '' ? (

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
                    <img
                      src={formInput.cover}
                      alt="uploaded-cover"
                      className="rounded-lg  w-full"
                    />
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
                    src={"/dash-1.jpg"}
                    width={50}
                    height={50}
                    alt="cat"
                    onClick={() => setAvatar(avtarInfo[1].cover)}
                    className="rounded-lg cursor-pointer"
                  />
                  <Image
                    src={"/dash-2.jpg"}
                    width={50}
                    height={50}
                    alt="cat"
                    onClick={() => setAvatar(avtarInfo[2].cover)}
                    className="rounded-lg cursor-pointer"
                  />
                  <Image
                    src={"/dash-3.jpg"}
                    width={50}
                    height={50}
                    alt="cat"
                    onClick={() => setAvatar(avtarInfo[3].cover)}
                    className="rounded-lg cursor-pointer"
                  />
                  <Image
                    src={"/dash-4.jpg"}
                    width={50}
                    height={50}
                    alt="cat"
                    onClick={() => setAvatar(avtarInfo[4].cover)}
                    className="rounded-lg cursor-pointer"
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
                    <h3 className="text-xl">Private Event</h3>
                    <p className="opacity-40">
                      Community Cohesion in Private Spaces
                    </p>
                  </div>
                  <div className={`flex items-center cursor-pointer`}>
                    <div
                      className={`w-12 h-6 bg-[#1E1E1E] rounded-full p-1 duration-300 ease-in-out ${formInput.isShortlistEnabled
                        ? "bg-green-500"
                        : "bg-[#1E1E1E]"
                        }`}
                      onClick={toggleSwitch}
                    >
                      <div
                        className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${formInput.isShortlistEnabled ? "translate-x-6" : ""
                          }`}
                      ></div>
                    </div>
                  </div>
                </div>
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
              <p className="right-0 text-gray-400"> {val.length}/1000</p>
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
                className="bg-[#E1E1E1] text-black invert bg-opacity-75 border border-[#676767] border-opacity-30  rounded-lg p-2 flex justify-end"
                onChange={(e) =>
                  setFormInput({
                    ...formInput,
                    date: e.target.value,
                  })
                }
                min={minDate}
                disabled={imgLoading}
              />
            </div>

            <div className="flex flex-col w-3/4 mx-auto my-4 ">
              <label className="pb-2">Stake price</label>
              <div className="relative flex flex-col items-center  w-full ">
                <input
                  type="text"
                  className={`border bg-[#1E1E1E] text-white bg-opacity-75 border-[#989898] 
                            border-opacity-30 rounded-lg p-2 w-full py-4 ${enableInput ? "bg-[#1E1E1E]" : "bg-gray-600"
                    }`}
                  id="myInput"
                  placeholder="0.01 ETH"
                  disabled={!enableInput}
                  onChange={(e) =>
                    setFormInput({
                      ...formInput,
                      stakePrice: e.target.value,
                    })
                  }
                />

                <button
                  className={`border w-1/6 absolute right-24 my-3 mr-4 px-4 py-1 rounded-lg bg-[#252542] border-[#1E1E1ED9] ${enableInput
                    ? "bg-white text-black"
                    : "bg-[#252542] text-white"
                    }`}
                  onClick={enableButton}
                >
                  Enable
                </button>
                <button
                  className={`w-1/6 absolute right-2 my-3 px-4 py-1 rounded-lg border-[#1E1E1ED9] ${enableInput
                    ? "bg-[#252542] text-white"
                    : "bg-white text-black"
                    }`}
                  onClick={disableButton}
                >
                  Free
                </button>
              </div>
            </div>
            <div className="w-3/4 mx-auto flex justify-evenly my-6">
              <button className="px-4 py-2 border rounded-lg" onClick={publish}>
                Mint
              </button>
              {/* <PopUp /> */}
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
        {popUpVisible ? <PopUp /> : <></>}

        <div className="relative z-0">
          <FooterSection />
        </div>
      </div>
    </>
  );
};

export default Create;
