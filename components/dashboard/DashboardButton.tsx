import Image from "next/image";

const DashboardButton = () => {
  return (

    <button className="block my-6">
      <div className="flex border border-white  px-3 py-4">
        <Image
          src="/icons/metamask-icon.svg"
          width="30"
          height="100"
          alt="metamask logo"
        />
        <p className="px-4 text-white">
          0x7c........8d7
        </p>
      </div>
    </button>
  )
}
export default DashboardButton;
