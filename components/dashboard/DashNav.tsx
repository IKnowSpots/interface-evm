import Image from "next/image";

const DashNav = () => {
    return(
        <div id="dash-navbar" className="flex pt-4">
        <input
            type="text"
            placeholder="Search events"
            className="text-white h-[34px] border-white w-1/4 bg-[#1C1C1C] mx-auto rounded-full px-4 "
        />
        <Image
            src={"/icons/Question.svg"}
            width={30}
            height={100}
            alt="Question svg"
            className="mr-2"
        />
        <button className="text-white flex justify-between items-center px-2 py-2 border rounded-lg">
            <Image
                src={"/bored_ape_image.png"}
                width={30}
                height={50}
                alt="bored ape image avatar"
                className="rounded-full"
            />
            <p>@iamacid</p>
        </button>
    </div>
    )
}

export default DashNav