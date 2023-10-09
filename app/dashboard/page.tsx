import Cards from "@/components/cards";
import DashboardButton from "@/components/dashboard/DashboardButton";
import SidebarItems from "@/components/dashboard/sidebarItems";
import Calender from "react-calendar";
// import "react-calendar/dist/Calendar.css";
import Image from "next/image";
import Link from "next/link";

const Dashboard = () => {
  return (
    <>
      <div className="bg-[#420294] text-white flex py-4 px-4 justify-around">
        <div className="px-4">
          <Image
            src="/iks-logo.png"
            width="200"
            height="400"
            alt="I know spots logo"
          />
          <div className="py-16">
            <SidebarItems icon_name="Home_fill" section_name="Dashboard" />
            <SidebarItems icon_name="Fire_fill" section_name="Active Events" />
            <SidebarItems
              icon_name="3d_box_fill"
              section_name="Inactive Events"
            />
            <SidebarItems
              icon_name="Ticket_use_fill"
              section_name="Minted Collection"
            />
            <SidebarItems icon_name="CPU" section_name="Shortlist" />
            <SidebarItems
              icon_name="lightning_fill"
              section_name="Featured Event"
            />
          </div>
          <div className="opacity-40 pt-44 text-lg">
            <p className="py-1">Support</p>
            <p className="py-1">Documents</p>
            <Link href="https://github.com/IKnowSpots">
              <div className="flex py-1">
                <p className="pr-4">GitHub </p>
                <Image
                  src="/icons/arrow.svg"
                  width="13"
                  height="100"
                  alt="arrow icon"
                />
              </div>
            </Link>
            <Link href="https://twitter.com/iknowspots">
              <div className="flex py-1">
                <p className="pr-4">Twitter</p>
                <Image
                  src="/icons/arrow.svg"
                  width="13"
                  height="100"
                  alt="arrow icon"
                />
              </div>
            </Link>
          </div>
          <div>
            <DashboardButton />
            <button className="block  bg-black my-6 ">
              <div className="flex px-16 py-4">
                <Image
                  src="/icons/pulsechain.png"
                  width="30"
                  height="100"
                  alt="metamask logo"
                />
                <p className="px-4 ">PLS Mainnet</p>
              </div>
            </button>
          </div>
        </div>

        <div>
          <div className="pb-4 flex ">
            <input
              type="text"
              placeholder="Search"
              className="w-1/4 bg-[#1C1C1C] mx-auto rounded-full px-4 "
            />
            <Image
              src={"/icons/Question.svg"}
              width={30}
              height={100}
              alt="Question svg"
              className="mr-2"
            />
            <button className="flex justify-between items-center px-2 py-2 border rounded-lg">
              <Image
                src={"/bored_ape_image.png"}
                width={30}
                height={50}
                alt="bored ape image avatar"
                className="rounded-full"
              />
              <p>@iamacid</p>
            </button>
          </div>
          <div className="grid grid-cols-4">
            <div className="px-4 bg-[#0F0F0FD9] py-8 rounded-xl mx-4 my-4">
              <Cards image={"3.png"} />
            </div>
            <Cards image={"3.png"} />
            <Cards image={"3.png"} />
            <Cards image={"3.png"} />
            <Cards image={"3.png"} />
            <Cards image={"3.png"} />
            <Cards image={"3.png"} />
            <div className="">
              <Calender className="rounded-xl py-8 px-2 items-center bg-black text-center justify-around " />
            </div>
          </div>
          <div className="w-72 mx-auto my-8">
            <button className="flex justify-between items-center px-2 py-2 border">
              <Image
                src={"/icons/qr.svg"}
                width={20}
                height={20}
                alt="qr code svg"
              />
              Create an Event
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
