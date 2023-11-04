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

        <div className="flex justify-center my-24 items-center">
            <div className="box-background w-[50%] px-6 py-12 relative z-20">
                <div className=" flex flex-col justify-center items-center gap-4">
                    <div className="w-[80%] flex justify-around items-center p-2 gap-4 border border-[#A0A0A038] rounded-lg">
                        <button className="bg-[#1F1A23]">Manual</button>
                        <button>Bulk</button>
                    </div>
                    <div className="bg-gradient-to-r from-[#fff] via-[#fff]/80 to-[#9d9ea1]/50 bg-clip-text text-transparent md:text-6xl text-center font-bold pb-1">We’d love to help</div>
                </div>
            </div>
        </div>
      </div>

      <FooterSection/>
    </div>
  );
};

export default Support;
