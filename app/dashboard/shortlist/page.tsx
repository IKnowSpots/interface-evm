"use client";
import Sidebar from "@/components/dashboard/Sidebar";
import Image from "next/image";
import DashNav from "@/components/navbar/NavbarDashboard";
import { useEffect, useState } from "react";
import { fetchShortlistEvents } from "../../../utils";
import CardsShortlist from "@/components/cards/cardsShortlist";
import LoadingModal from "@/components/LoadingModal";

const Shortlist = () => {
  const [activeEvents, setActiveEvents] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchShortlistEventsData();
  }, []);

  async function fetchShortlistEventsData() {
    try {
      setLoading(true);
      let data: any = await fetchShortlistEvents();
      setActiveEvents(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  function CreateButton() {
    return (
      <a href="/dashboard/create-event">
        <div className="create-event-btn text-[0.8rem] flex justify-around w-[10rem] mx-auto px-4 py-2 border rounded-xl z-[10]">
          <Image
            src={"/icons/qr.svg"}
            width={20}
            height={20}
            alt="qr code svg"
            className=""
          />
          <p className="z-[10] text-white">Create an Event</p>
        </div>
      </a>
    );
  }

  if (loading == true)
    return (
      <Layout>
        <LoadingModal visible={true} />
      </Layout>
    );

  if (loading == false && activeEvents.length == 0)
    return (
      <Layout>
        <div className="flex justify-center items-center mt-10 mb-10">
          <Image
            src={"/noshortlisted-banner.svg"}
            width={17}
            height={20}
            alt="back-btn"
            className="w-[30%] h-fit"
          />
        </div>
        <div>
          <CreateButton />
        </div>
      </Layout>
    );

  return (
    <Layout>
      <div className="flex gap-x-6 gap-y-5 flex-wrap pt-4 px-6 ">
        {activeEvents.map((nft: any, i: any) => {
          return (
            <CardsShortlist
              key={i}
              tokenId={nft?.tokenId}
              image={nft?.cover}
              name={nft?.name}
              price={nft?.price}
              date={nft?.date}
              remaining={nft?.remaining}
              supply={nft?.supply}
            />
          );
        })}
      </div>
    </Layout>
  );

  function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex w-full">
        <Sidebar />
        <div className="bg-[#25143a] w-[80%] min-h-screen overflow-y-auto">
          <DashNav />
          <div className="px-12 ">
            <div className="bg-createEvent blur-[220px] absolute w-[70%] h-[75vh] z-[-1]" />

            <p className="text-white font-semibold pl-4 pt-2">
              SHORTLIST EVENTS
            </p>
          </div>
          {children}
        </div>
      </div>
    );
  }
};

export default Shortlist;
