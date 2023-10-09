import Cards from "@/components/cards";
import DashboardButton from "@/components/dashboard/DashboardButton";
import SidebarItems from "@/components/dashboard/sidebarItems";
import Calender from "react-calendar";
// import "react-calendar/dist/Calendar.css";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "@/components/dashboard/Sidebar";

const Dashboard = () => {
  return (
    <>
      <div className="bg-[#420294] text-white flex py-4 px-4 justify-around">
        <Sidebar />
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
