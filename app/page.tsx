import Image from "next/image";
import Link from "next/link";
import footerGradient from "../public/mediumGradient.png";
import Navbar from "@/components/landing-page/Navbar";
import HeroSection from "@/components/landing-page/HeroSection";
import CardsSection from "@/components/landing-page/CardsSection";
import HowItWork from "@/components/landing-page/HowItWork";
import Missions from "@/components/landing-page/Missions";
import ExploreSolutions from "@/components/landing-page/ExploreSolution";
import ToolSection from "@/components/landing-page/ToolsSection";
import SdkSection from "@/components/landing-page/sdk";
import FooterSection from "@/components/landing-page/FooterSection";
export default function Home() {
  return (
    <>
      <div className="gradient-bg text-white w-full overflow-hidden">
        <Navbar />
        <HeroSection />
        <div className="">
          <Image
            src="/patners.png"
            width="1500"
            height="100"
            alt="Patners of IKS"
          />
        </div>
        <div id="hotevent">
          <h1 className="text-5xl my-20 mx-12 ">HOT EVENT</h1>
          <CardsSection />
        </div>
        <div>
          <h1 className="text-6xl text-center w-full font-semibold">
            How it works
          </h1>
          <HowItWork />
        </div>
        <Missions />
        <ExploreSolutions />
        <ToolSection />
        <SdkSection />
        <FooterSection />
      </div>
    </>
  );
}
