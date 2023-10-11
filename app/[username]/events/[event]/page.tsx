import Navbar from "@/components/dashboard/create/Navbar";
import Image from "next/image";

const Event = () => {
  return (
    <div className="bg-[#25143a] text-white px-8 ">
      <Navbar />
      <div className="md:flex md:flex-row flex flex-col py-4">
        <div>
          <img
            src={"/events/1.png"}
            alt="event img"
            className="md:w-[700px] md:h-[732px] w-[400px] h-[400px] mx-auto "
          />
        </div>
        <div className="flex flex-col px-24 ">
          <div className="flex items-center py-2  ">
            <Image
              src={"/icons/dollar.svg"}
              width={20}
              height={30}
              alt="dollar svg"
            />
            <p className="font-lg pl-2">RSVP Stake</p>
          </div>
          <div>
            <h1 className="text-2xl font-bold py-2">Event Name</h1>
          </div>
          <div>
            <p>0.03 SOL</p>
          </div>
          <div className="flex py-4">
            <Image
              src={"/icons/person_avatar.png"}
              width={50}
              height={30}
              alt="person avatar"
            />
            <div className="pl-4">
              <p className="text-[rgba(255,255,255,0.65)]">Host</p>
              <h3 className="text-xl">Host Name</h3>
            </div>
          </div>
          <div className="bg-[#1E1E1EA6] my-8 py-8 px-12 ">
            <h1 className="text-3xl pb-4">Venue</h1>
            <p className="w-96">
              Lorem ipsum dolor sit amet consectetur. Tortor mattis mauris
              pretium convallis sed ut fermentum nunc. Venenatis at bibendum
              ullamcorper at. Dictumst vitae enim mattis adipiscing nullam
              tempus tempor dictum. Amet ut vel dui fermentum massa facilisis
              ut.
            </p>
            <div className="flex py-4">
              <p className="text-[#3E8BFF] text-xl pr-21">Link text</p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="external-link">
                  <path
                    id="Vector"
                    d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
                    stroke="#3E8BFF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_2"
                    d="M15 3H21V9"
                    stroke="#3E8BFF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_3"
                    d="M10 14L21 3"
                    stroke="#3E8BFF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </div>
          </div>
          <button className="bg-white text-black px-4 py-2 w-1/3 mx-auto    ">
            Claim Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Event;
