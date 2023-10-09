import Sidebar from "@/components/dashboard/Sidebar";
import Image from "next/image";
import DashNav from "@/components/dashboard/DashNav";

const Feature = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="bg-[#25143a] p-4 w-[100vw]">
                <DashNav />
                <div>
                    <p className="text-white">Not available yet</p>
                </div>
            </div>
        </div>
    );
};

export default Feature;
