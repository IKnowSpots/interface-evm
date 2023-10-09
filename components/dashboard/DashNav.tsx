import Image from "next/image";
import Link from "next/link";

const DashNav = () => {
    return (
        <div id="dash-navbar" className="flex pt-4">
            <input
                type="text"
                placeholder="Search events"
                className="text-white h-[34px] border-white w-1/4 bg-[#1C1C1C] mx-auto rounded-full px-4 "
            />

            <Link href="/test/events" >
                <Image
                    src={"/icons/Question.svg"}
                    width={30}
                    height={100}
                    alt="Question svg"
                    className="mr-2"
                />
            </Link>
            <button className="text-white text-sm flex justify-between items-center gap-1 px-3 mt-[-0.5rem] border rounded-lg">
                <Image
                    src={"/bored_ape_image.png"}
                    width={25}
                    height={30}
                    alt="bored ape image avatar"
                    className="rounded-full"
                />
                <p className="font">@iamacid</p>
            </button>
        </div>
    );
};

export default DashNav;
