import Image from "next/image";
import SidebarItems from "./sidebarItems";
import Link from "next/link";
import DashboardButton from "./DashboardButton";

const Sidebar = () => {
  return (
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
        <SidebarItems icon_name="3d_box_fill" section_name="Inactive Events" />
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
  );
};
export default Sidebar;
