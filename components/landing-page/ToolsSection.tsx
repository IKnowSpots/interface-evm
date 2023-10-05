import Image from "next/image";

const ToolSection = () => {
  return (
    <div className="flex justify-evenly ">
      <div>
        <h1 className="text-5xl font-bold pt-12 ">Powerful suite of tools</h1>
        <p className="w-[600px] py-4 pb-14">
          I Know Spots desires to lead the ticketing industry, both
          operationally and in digital ticketing.
        </p>
        <div className="flex justify-between w-3/4 bg-[#56565680] px-4 py-6  my-8  rounded-xl">
          <p>Custom Subdomains.</p>
          <Image
            src="/icons/bubble.png"
            width="20"
            height="50"
            alt="bubble png"
          />
        </div>
        <div className="flex justify-between w-3/4 bg-[#56565680] px-4 py-6  my-8 rounded-xl">
          <p>Custom Subdomains.</p>
          <Image
            src="/icons/table_settings.png"
            width="20"
            height="50"
            alt=""
          />
        </div>
        <div className="flex justify-between w-3/4 bg-[#56565680] px-4 py-6  my-4 rounded-xl">
          <p>Custom Subdomains.</p>
          <Image src="/icons/candlestick.png" width="20" height="50" alt="" />
        </div>
      </div>
      <div>
        <Image src="/features-demo-img.png" width="600" height="100" alt="" />
      </div>
    </div>
  );
};
export default ToolSection;
