import Image from "next/image";

const Missions = () => {
    function RenderLorem1() {
        return (
            <div>
                <p className="w-3/4 pt-8">
                    With NFTs, ticket authenticity can be easily verified,
                    preventing counterfeiting and ensuring that only valid
                    tickets are bought and sold.
                </p>
            </div>
        );
    }
    function RenderLorem2() {
        return <div></div>;
    }
    function RenderLorem3() {
        return <div></div>;
    }

    return (
        <div className="bg-[#3C3C3C] relative flex justify-between px-8  mx-12 my-16 rounded-xl bg-opacity-40 bg-blur-md">
            <div>
                <h1 className="text-5xl mt-12 ">Our Mission</h1>
                <div className="flex justify-around w-1/4 pt-6">
                    <p className="hoverUnderline">Lorum</p>
                    <p className="hoverUnderline">Lorum</p>
                    <p className="hoverUnderline">Lorum</p>
                </div>
                <RenderLorem1 />
            </div>
            <div>
                <Image src="/dics.png" width="200" height="200" alt="discs" />
            </div>
        </div>
    );
};
export default Missions;
