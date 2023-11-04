import FooterSection from "@/components/landing/FooterSection";
import CreateNav from "@/components/dashboard/CreateNav";
import Script from "next/script";

const Support = () => {
  return (
    <div className="bg-supportPage pb-12 text-white overflow-y-hidden px-8">
    <div className="mb-8">
        <CreateNav />
    </div>
      {/* <hr className="mx-4" /> */}
      <div className="relative z-10 mt-16">
        <div className="flex flex-col items-center">
            <div>
                <h3 className="text-3xl font-semibold mb-2">Shortlist</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quo ullam recusandae cum magni nulla commodi temporibus voluptatem illo voluptas?</p>
            </div>
        </div>

        <div className="flex justify-center items-center">
        <div className="box-background w-[60%] my-20 relative z-20">
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
      </div>


      <Script
        id="tally-js"
        src="https://tally.so/widgets/embed.js"
      // onLoad={() => {
      //     Tally.loadEmbeds();
      // }}
      />
      <FooterSection/>
    </div>
  );
};

export default Support;
