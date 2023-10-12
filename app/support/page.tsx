import Navbar from "@/components/dashboard/create/Navbar";
import Script from "next/script";

const Support = () => {
  return (
    <div className="bg-[#25143a] pb-24 px-8 text-white">
      <Navbar />
      <hr className="mx-4" />
      <div className="bg-[#1D1D1DBF] px-32 py-12 my-24 w-[60%] mx-auto  ">
        <iframe
          data-tally-src="https://tally.so/embed/3xDyqG?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="381"
          // frameborder="0"
          // marginheight="0"
          // marginwidth="0"
          title="We'd love to help"
        ></iframe>
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
