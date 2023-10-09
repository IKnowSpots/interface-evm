import Sidebar from "@/components/dashboard/Sidebar";
import Image from "next/image";
import Cards from "@/components/cards";
import DashNav from "@/components/dashboard/DashNav";

const InactiveEvents = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="bg-[#25143a] p-4">
                <DashNav />
                <div className="grid grid-cols-4">
                    <div className="text-white px-4 bg-[#0F0F0FD9] py-8 rounded-xl mx-4 my-4">
                        <Cards image={"3.png"} />
                    </div>
                    {/* <Cards image={"3.png"} />
            <Cards image={"3.png"} />
            <Cards image={"3.png"} />
            <Cards image={"3.png"} />
            <Cards image={"3.png"} />
            <Cards image={"3.png"} /> */}
                    <div className="">
                        {/* <Calender className="rounded-xl py-8 px-2 items-center bg-black text-center justify-around " /> */}
                    </div>
                </div>
                <div className="w-72 mx-auto my-8">
                    <button className="text-white flex justify-between items-center px-2 py-2 border">
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
    );
};

export default InactiveEvents;
