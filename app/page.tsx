import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#000] from-50% to-[#af16e3]  text-white w-full  ">
        <nav className="flex justify-evenly items-center py-8 w-full absolute">
          <Image
            src="/iks-logo.png"
            width="252"
            height="300"
            className=""
            alt="I know spots logo"
          />
          <Link href="/product">
            <p>Product</p>
          </Link>
          <Link href="/product">
            <p>Pricing</p>
          </Link>
          <Link href="/product">
            <p>FAQ's</p>
          </Link>
          <Link href="/product">
            <p>About</p>
          </Link>
          <Link href="/product">
            <button className="border border-[#C584F5] px-4 py-2 rounded-xl ">
              Connect Wallet
            </button>
          </Link>
        </nav>
        <div className="">
          <div className=" top-1/4 text-center w-full absolute">
            <h1 className="  text-8xl  font-bold  ">
              Introducing <span className="block">iknowspots</span>
            </h1>
            <p className="my-5 text-xl">Seamless granular events hosting with NFT tickets.</p>
            <button className="outline ">Claim Now</button>
          </div>
          <Image
            src="/circles.png"
            width="1500"
            height="50"
            className="circle-1"
            alt="Circle"
          />
          <Image
            src="/circles-mirror.png"
            width="1500"
            height="100"
            className="circle-2"
            alt="Circle"
          />
        </div>
      </div>
    </>
  );
}
