import Sidebar from "@/components/dashboard/Sidebar";
import Image from "next/image";
import DashNav from "@/components/dashboard/Navbar";

const Shortlist = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="bg-[#25143a] p-4 w-[80%]">
                <DashNav />
                <div>
                <div className="bg-createEvent blur-[220px] absolute w-full h-[700px] z-[-1]"/>

                    <p className="text-white">Not available yet</p>
                </div>
            </div>
        </div>
    );
};

export default Shortlist;
