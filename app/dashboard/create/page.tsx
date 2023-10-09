import Image from "next/image";

const eventPage = () => {
  return (
    <div className="bg-[#420294] text-white  px-8">
      <div className="flex justify-between items-center py-4">
        <Image src={"/iks-logo.png"} width={300} height={300} alt="iks logo" />
        <div className="flex  ">
          <button className="rounded-full mr-8 flex ">
            <Image
              src={"/bored_ape_image.png"}
              width={30}
              height={50}
              alt="bored ape nft image"
              className="rounded-xl"
            />
            <p>@iamacid</p>
          </button>
          <button className="flex">
            <Image
              src={"/icons/metamask-icon.svg"}
              width={"30"}
              height={"30"}
              alt="Metamask fox svg"
            />
            <p>0x7c........a3f208d7</p>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="">
          <p className="text-3xl ">Create an Event</p>
          <div>
            <p className="text-xl ">Upload a file</p>
            <p className="text-white opacity-40">
              Upload or choose your file to upload
            </p>
            <div className="">
              <label className="flex justify-center py-64  border-2 bg-[#1E1E1EA6] border-white  border-dashed  rounded-md  cursor-pointer hover:border-gray-400 ">
                <span className="flex items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-600"
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
                  <span className="font-medium text-gray-600 block">
                    PNG, JPG, GIF, WEBP
                  </span>
                </span>
                <input type="file" name="file_upload" className="hidden" />
              </label>
            </div>
            <div className="flex justify-evenly py-12">
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
        <div>
          <div>
            <h3>Shortlist events</h3>
            <p className="opacity-40">
              Display this on feature section of landing page.
            </p>
            {/* toggle feature */}
          </div>
          <div className="flex flex-col w-3/4 mx-auto ">
            <label>Event Name</label>
            <input
              type="text"
              id="event-name"
              placeholder="eg. name of the event"
              className="bg-[#1E1e1ea6] rounded-lg p-2"
            />
          </div>
          <div className="flex flex-col w-3/4 mx-auto my-4">
            <label>Description</label>
            <textarea className="bg-[#1E1E1EA6] rounded-lg resize-none "></textarea>
          </div>
          <div className="flex justify-evenly mx-4 ">
            <div className="flex flex-col ">
              <label>Supply</label>
              <input
                type="text"
                id="event-name"
                placeholder="2000"
                className="bg-[#1E1e1ea6] w-full rounded-lg p-2"
              />
            </div>
            <div className="flex flex-col ">
              <label>Venue</label>
              <input
                type="text"
                id="event-name"
                placeholder="Example Text"
                className="bg-[#1E1e1ea6] rounded-lg p-2"
              />
            </div>
          </div>
          <div className="flex flex-col w-3/4 mx-auto ">
            <label>Date</label>
            <input
              type="date"
              id="event-name"
              className="bg-[#1E1e1ea6]  rounded-lg p-2"
            />
          </div>
          <div className="flex flex-col w-3/4 mx-auto ">
            <label>Stake price</label>
            <div className="">
              <input
                type="text"
                id="event-name"
                placeholder="0.01ETH"
                className="bg-[#1E1e1ea6] rounded-lg w-3/4 mx-auto relative p-2"
              />
              <button className="px-2 py-2 border ">Enable</button>
              <button className="px-1 py-2 bg-white text-black">Disable</button>
            </div>
          </div>
          <div className="w-3/4 mx-auto flex justify-evenly my-6">
            <button className="px-4 py-2 border rounded-lg">Preview</button>
            <button className="px-4 py-2 border rounded-lg">Publish</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default eventPage;
