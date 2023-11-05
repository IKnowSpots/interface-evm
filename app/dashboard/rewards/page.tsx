import Sidebar from "@/components/dashboard/Sidebar";
import Image from "next/image";
import DashNav from "@/components/dashboard/Navbar";

const Feature = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="bg-[#25143a] w-[80%]">
                <DashNav />
                <div>
                <div className="bg-createEvent blur-[220px] absolute w-[70%] h-[700px] z-[-1]"/>

                    <p className="text-white p-4">Not available yet</p>
                </div>
            </div>
        </div>
    );
};

export default Feature;
