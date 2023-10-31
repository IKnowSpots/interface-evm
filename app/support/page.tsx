import Navbar from "@/components/landing/Navbar";
import Script from "next/script";

const Support = () => {
  return (
    <div className="bg-supportPage pb-24 text-white overflow-y-hidden">
      <Navbar />
      <hr className="mx-4" />
      <div className="relative z-10">
        <div className="absolute left-[30rem] top-[25rem] w-80 h-80 bg-gradient-to-br from-violet-700 via-violet-600 to-violet-700 bg-opacity-80 rounded-full blur-[70px] transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute left-[65rem] top-1/4 w-44 h-44 bg-gradient-to-br from-purple-600 via-purple-500 to-purple-600 rounded-full blur-[70px] transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="bg-stone-900 bg-opacity-75 rounded-[5px] border-2 border-neutral-700 border-opacity-75 backdrop-blur-[30px] px-32 py-12 my-24 w-[60%] mx-auto relative z-20">
          <div className="leading-[2rem]">
            <div className="text-center text-white text-opacity-60 text-base font-normal">Get in touch</div>
            <div className="bg-gradient-to-r from-[#fff] via-[#fff]/80 to-[#9d9ea1]/50 bg-clip-text text-transparent md:text-6xl text-center font-bold pb-1">We’d love to help</div>
          </div>
          <iframe
            data-tally-src="https://tally.so/embed/3xDyqG?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="381"
            className="text-white"
            title="We'd love to help"
          ></iframe>
        </div>
      </div>


      <Script
        id="tally-js"
        src="https://tally.so/widgets/embed.js"
      // onLoad={() => {
      //     Tally.loadEmbeds();
      // }}
      />
    </div>
  );
};

export default Support;
