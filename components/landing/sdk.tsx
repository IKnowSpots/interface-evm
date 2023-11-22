"use client";
import Spline from "@splinetool/react-spline";

const SdkSection = () => {
  return (
    <div className="outer-box p-3 sm:mx-12">
      <div className="p-5 box-background">
        <div>
          <div className="grad2 blur-[400px] absolute w-full h-[700px]"></div>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <img src="/sdk1.gif" className="w-[80%]" alt="snippet-image" />
          {/* <Spline scene="https://prod.spline.design/AYHgIgDYGdwYyrFj/scene.splinecode"/> */}
          <div className="flex flex-col justify-center items-center">
            <div className="bg-[#202020D9] text-[0.6rem] sm:text-base px-2 sm:px-5 py-1 sm:py-3 rounded sm:rounded-xl border border-[#DCDCDC33]">
              SDK Coming Soon!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SdkSection;
