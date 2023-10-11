import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4">
      <Link href="/">
        <Image src={"/iks-logo.png"} width={300} height={300} alt="iks logo" />
      </Link>
      <div className="flex  ">
        <button className="rounded-full h-[] px-8 mr-8 flex items-center bg-gradient-to-r from-[#9000FF] to-[#1D102700] ">
          {/* <Image
      src={"/bored_ape_image.png"}
      width={30}
      height={50}
      alt="bored ape nft image"
      className="rounded-xl"
    /> */}
          <p>@{"username"}</p>
        </button>
        {/* remaning: fix the basic gradients of this */}
        <button className="flex items-center py-3 px-3 rounded-lg border border-white">
          <Image
            src={"/icons/metamask-icon.svg"}
            width={"30"}
            height={"30"}
            alt="Metamask fox svg"
          />
          <p>0x7c........a3f208d7</p>
        </button>
      </div>
    </div>
  );
};
export default Navbar;
