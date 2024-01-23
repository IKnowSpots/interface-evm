import Image from "next/image";

const ToolSection = () => {
  return (
    <div className="flex flex-col lg:flex-row relative z-5 items-center justify-center gap-8 mx-8 ">
      <div className="w-full flex flex-col">
        <div className="w-full flex justify-end">
          <div className="grad1 blur-[300px] z-[-1] flex h-[639px] w-[660px] absolute"></div>
        </div>
        <h1 className="text-2xl sm:text-5xl font-bold pt-4 sm:pt-12 ">
          Powerful suite of tools
        </h1>
        <p className="sm:w-[60%] py-4 pb-14">
          iknowspots desires to lead the ticketing industry, both operationally
          and in digital ticketing.
        </p>
        <div className="flex justify-between w-full sm:w-3/4 box-background px-2 sm:px-4 py-4 sm:py-6 my-6 text-[0.75rem] sm:text-[1rem] sm:my-8 rounded-xl">
          <p>Custom Subdomains.</p>
          <Image
            src="/icons/bubble.svg"
            width="20"
            height="50"
            alt="bubble png"
          />
        </div>
        <div className="flex justify-between w-full sm:w-3/4 box-background px-2 sm:px-4 py-4 sm:py-6 my-6 text-[0.75rem] sm:text-[1rem] sm:my-8 rounded-xl">
          <p>Event-specific landing pages.</p>
          <Image
            src="/icons/table_settings.svg"
            width="20"
            height="50"
            alt=""
          />
        </div>
        <div className="flex justify-between w-full sm:w-3/4 box-background px-2 sm:px-4 py-4 sm:py-6 my-6 text-[0.75rem] sm:text-[1rem] sm:my-8 rounded-xl">
          <p>Backend as a service.</p>
          <Image src="/icons/candlestick.svg" width="20" height="50" alt="" />
        </div>
      </div>
      <div className="">
        <div className="w-full hidden md:flex justify-end">
          <div className="grad1 blur-[100px] z-[-1] flex h-[639px] w-[40%] absolute"></div>
        </div>
        <Image
          src="/collage.svg"
          className=""
          width="800"
          height="200"
          alt=""
        />
      </div>
    </div>
  );
};
export default ToolSection;
