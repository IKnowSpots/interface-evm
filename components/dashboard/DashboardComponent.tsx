"use client";
import ActiveEvents from "./Active";
import InactiveEvents from "./Inactive";
import MintedCollections from "./Minted";
import Shortlist from "../../app/dashboard/shortlist/page";
import Rewards from "./DashReward";
import NewSidebar from "@/components/dashboard/Sidebar";
import DashNav from "@/components/navbar/NavbarDashboard";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useState } from "react";
import { SectionContext } from "@/app/dashboard/ContextProvider";
const DashboardComponent = () => {
  const SidebarActiveElementState = useContext(SectionContext)
  const [activePage, setActivePage] = useState("ActivePage");
  return (
    <Layout>
      <div className="bg-[#25143a] w-[80%] min-h-screen overflow-y-auto">
        <RenderPage />
      </div>
    </Layout>
  );

  function RenderPage() {
    //@ts-ignore
    if (SidebarActiveElementState.activeElement !== "") {

      console.log("reaching here")
      //@ts-ignore
      setActivePage(SidebarActiveElementState?.activeElement)
    }
    if (activePage == "ShortlistPage") {
      return <Shortlist />;
    }
    if (activePage == "MintedPage") {
      return (
        <MintedCollections />
      );
    }
    if (activePage == "RewardsPage") {
      return <Rewards />;
    }
    if (activePage == "ActivePage") {
      return <ActiveEvents />;
    }
    if (activePage == "InactivePage") {
      return <InactiveEvents />;
    }
  }

  function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="w-full flex">
        <NewSidebar setActivePage={setActivePage} activePage={activePage} />
        {children}
      </div>
    );
  }
};

export default DashboardComponent;
