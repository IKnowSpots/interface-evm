import Image from "next/image";
import Link from "next/link";
import footerGradient from "../public/mediumGradient.png";
import Navbar from "@/components/landing-page/Navbar";
import HeroSection from "@/components/landing-page/HeroSection";
import FeaturedEvents from "@/components/landing-page/FeaturedEvents";
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
                <div className="w-full flex justify-end">
                    <div className="grad1 blur-[140px] flex h-[1200px] w-[660px] absolute"></div>
                </div>
                <HeroSection />
                <div
                    id="partners"
                    className="relative mt-[5rem] mb-[10rem] flex justify-center items-center "
                >
                    <Image
                        src="/patners.png"
                        width="1500"
                        height="100"
                        alt="Patners of IKS"
                    />
                </div>
                <div>
                    <div className="grad2 absolute blur-[400px] w-full h-[800px] z-[-1]"></div>
                </div>
                <div id="hotevent" className="mb-[10rem]">
                    <h1 className="text-5xl my-10 mx-12 ">HOT EVENT</h1>
                    <FeaturedEvents />
                </div>
                <div>
                    <div className="grad2 blur-[220px] absolute w-full h-[700px]"></div>
                </div>
                <div id="howitworks" className="relative mb-[10rem]">
                    <h1 className="text-6xl text-center w-full font-semibold">
                    How we stand out
                    </h1>
                    <HowItWork />
                </div>
                <div className="mb-[10rem]">
                    <Missions />
                </div>
                <div  className="mb-[5rem]">
                    <ExploreSolutions />
                </div>
                <div  className="mb-[10rem]">
                    <ToolSection />
                </div>
                <div  className="mb-[10rem]">
                    <SdkSection />
                </div>
                <FooterSection />
            </div>
        </>
    );
}
