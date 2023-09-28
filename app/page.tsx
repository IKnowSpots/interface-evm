import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="gradient-bg text-white w-full overflow-hidden">
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
        <div>
          <div className=" top-1/4 text-center w-full absolute">
            <h1 className="  text-8xl  font-bold text-gradient ">
              Introducing <span className="block">iknowspots</span>
            </h1>
            <p className="my-5 text-xl">
              Seamless granular events hosting with NFT tickets.
            </p>
            <button className="outline ">Claim Now</button>
          </div>
          <div id="parent-div" className="relative w-full p-6">
            <Image
              src="/circles.png"
              width="1500"
              height="50"
              className="opacity-20  "
              alt="Circle"
            />
            <Image
              src="/circles-mirror.png"
              width="1500"
              height="100"
              className="absolute top-0 rotate-12 opacity-20"
              alt="Circle"
            />
          </div>
        </div>
        <div className="">
          <Image
            src="/patners.png"
            width="1500"
            height="100"
            alt="Patners of IKS"
          />
        </div>
        <div id="hotevent">
          <h1 className="text-5xl my-20 mx-12 ">HOT EVENT</h1>
          <div className="flex justify-around">
            <div className="flex flex-col ">
              <Image
                src="/events/1.png"
                width="300"
                height="400"
                alt="Event 1 Image"
              />
              <div className="flex justify-between my-6">
                <p>Lorum Ipsum</p>
                <p>1.20 Weth</p>
              </div>
              <hr />
              <div className="flex justify-between my-6">
                <p>
                  End's In 01.34.45
                </p>
                <button className="px-4 py-1 outline rounded-lg">Bid</button>
              </div>
            </div>
            <div className="flex flex-col ">
              <Image
                src="/events/2.png"
                width="300"
                height="400"
                alt="Event 1 Image"
              />
              <div className="flex justify-between my-6">
                <p>Lorum Ipsum</p>
                <p>1.20 Weth</p>
              </div>
              <hr />
              <div className="flex justify-between my-6">
                <p>
                  End's In 01.34.45
                </p>
                <button className="px-4 py-1 outline rounded-lg">Bid</button>
              </div>
            </div>
            <div className="flex flex-col ">
              <Image
                src="/events/3.png"
                width="300"
                height="400"
                alt="Event 1 Image"
              />
              <div className="flex justify-between my-6">
                <p>Lorum Ipsum</p>
                <p>1.20 Weth</p>
              </div>
              <hr />
              <div className="flex justify-between my-6">
                <p>
                  End's In 01.34.45
                </p>
                <button className="px-4 py-1 outline rounded-lg">Bid</button>
              </div>
            </div>
            <div className="flex flex-col ">
              <Image
                src="/events/4.png"
                width="300"
                height="400"
                alt="Event 1 Image"
              />
              <div className="flex justify-between my-6">
                <p>Lorum Ipsum</p>
                <p>1.20 Weth</p>
              </div>
              <hr />
              <div className="flex justify-between my-6">
                <p>
                  End's In 01.34.45
                </p>
                <button className="px-4 py-1 outline rounded-lg">Bid</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-6xl text-center w-full font-semibold">How it works</h1>
          <div className=" w-full flex justify-around my-16 ">
            <div className="bg-[#141118]   flex flex-col w-1/4 rounded-lg px-12 py-8 mx-4 items-center text-center">
              <Image
                src="/drive-add-icon.png"
                width="50"
                height="50"
                alt="icon drive add icon"
              />
              <h3>Set up your wallet</h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
            <div className="bg-[#141118]   flex flex-col w-1/4 rounded-lg px-12 py-8 mx-4 items-center text-center">
              <Image
                src="/drive-add-icon.png"
                width="50"
                height="50"
                alt="icon drive add icon"
              />
              <h3>Set up your wallet</h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
            <div className="bg-[#141118]   flex flex-col w-1/4 rounded-lg px-12 py-8 mx-4 items-center text-center">
              <Image
                src="/drive-add-icon.png"
                width="50"
                height="50"
                alt="icon drive add icon"
              />
              <h3>Set up your wallet</h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1>Our Mission</h1>
          <p>Lorum</p>
          <p>Lorum</p>
          <p>Lorum</p>
        </div>
      </div>
    </>
  );
}
