import Image from "next/image";
import SidebarItems from "./sidebarItems";
import Link from "next/link";
import DashboardButton from "./DashboardButton";

const Sidebar = () => {
    return (
        <div
            id="sidebar"
            className="pl-8 bg-[rgb(61,23,111)] w-[25%] py-8"
        >
            <Link href="/">
                <Image
                    src="/iks-logo.png"
                    width="200"
                    height="400"
                    alt="I know spots logo"
                />
            </Link>
            <div className="py-16 text-white">
                {/* <SidebarItems icon_name="Home_fill" section_name="Dashboard" /> */}

                <Link href="/dashboard/active">
                    <SidebarItems
                        icon_name="Fire_fill"
                        section_name="Active Events"
                    />
                </Link>

                <Link href="/dashboard/inactive">
                    <SidebarItems
                        icon_name="3d_box_fill"
                        section_name="Inactive Events"
                    />
                </Link>

                {/* <SidebarItems
                    icon_name="Ticket_use_fill"
                    section_name="Minted Collection"
                /> */}

                <Link href="/dashboard/shortlist">
                    <SidebarItems icon_name="CPU" section_name="Shortlist" />
                </Link>

                <Link href="/dashboard/feature">
                    <SidebarItems
                        icon_name="lightning_fill"
                        section_name="Feature"
                    />
                </Link>
            </div>
            <div className="opacity-40 pt-[30%] text-lg text-white">
                <Link target="_blank" href="/support">
                    <p className="py-1">Support</p>
                </Link>
                <Link target="_blank" href="/">
                    <p className="py-1">Documents</p>
                </Link>
                <Link target="_blank" href="https://github.com/IKnowSpots">
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
                <Link target="_blank" href="https://twitter.com/iknowspots">
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
                    <div className="flex px-6 py-4">
                        <Image
                            src="/icons/pulsechain.png"
                            width="30"
                            height="100"
                            alt="metamask logo"
                        />
                        <p className="px-2 text-white">PLS Mainnet</p>
                    </div>
                </button>
            </div>
        </div>
    );
};
export default Sidebar;
