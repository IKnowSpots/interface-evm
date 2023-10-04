import Image from "next/image";
import Link from "next/link";
import footerGradient from "../public/mediumGradient.png";
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
            <button className="cta-button px-8 py-1">Claim Now</button>
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
        <div className="bg-[#3C3C3C] flex justify-between px-8  mx-12 my-16 rounded-xl bg-opacity-40 bg-blur-md">
          <div>
            <h1 className="text-5xl mt-12 ">Our Mission</h1>
            <div className="flex justify-around w-1/4 pt-6">
              <p className="underline underline-offset-3 pb-2">Lorum</p>
              <p>Lorum</p>
              <p>Lorum</p>
            </div>
            <p className="w-3/4 pt-8">With NFTs, ticket authenticity can be easily verified, preventing counterfeiting and ensuring that only valid tickets are bought and sold.</p>
          </div>
          <div>
            <Image
              src="/dics.png"
              width="200"
              height="200"
            />
          </div>
        </div>
        <div className='text-center '>
          <h1 className="text-6xl font-semibold">Explore the Solutions</h1>
          <p className="w-[550px] my-8 mx-auto">With NFTs, ticket authenticity can be easily verified,
            preventing counterfeiting and ensuring that only valid tickets are bought and sold.</p>
        </div>
        <div className ="flex justify-evenly ">
          <div>
            <h1 className ="text-5xl font-bold pt-12 " >Powerful suite of tools</h1>
            <p className ="w-[600px] py-4 pb-14">I Know Spots desires to lead the ticketing industry,
              both operationally and in digital ticketing.</p>
            <div className ="flex justify-between w-3/4 bg-[#56565680] px-4 py-6  my-8  rounded-xl">
             <p>Custom Subdomains.</p> 
             <Image
              src ="/icons/bubble.png"
              width = "20"
              height = "50"
             />
            </div>
            <div className ="flex justify-between w-3/4 bg-[#56565680] px-4 py-6  my-8 rounded-xl">
             <p>Custom Subdomains.</p> 
             <Image
              src ="/icons/bubble.png"
              width = "20"
              height = "50"
             />
            </div>
            <div className ="flex justify-between w-3/4 bg-[#56565680] px-4 py-6  my-4 rounded-xl">
             <p>Custom Subdomains.</p> 
             <Image
              src ="/icons/bubble.png"
              width = "20"
              height = "50"
             />
            </div>
          </div>
         <div>
          <Image
            src ="/features-demo-img.png"
            width ="600"
            height ="100"
          />
         </div> 
        </div>
        <div className="py-10 my-10 px-10 box-background mx-12" >
            <div className="flex justify-evenly">
                <img src="/snippet.png" alt="snippet-image" />
                <div className="flex flex-col justify-center">
                  <h1 className="text-white text-8xl font-semibold tracking-tighter">SDK</h1>
                  <h3 className="CS-text-gradient font-semibold text-7xl italic tracking-tighter">Coming soon!</h3>
                </div>
             </div>
        </div>
        <div className="flex justify-between pt-6 mx-5 mt-12 mx-12 border-white footer-gradient z-10 overflow-hidden footerDiv">
          <div className="flex flex-col">
          <div className="">
          <img src='./iks-logo.png' 
            width="252"
            height="300"
            className=""
            alt="I know spots logo" />
            <p className="text-[#ffffffbf] text-m">Seamless granular events hosting with NFT tickets.</p>
          </div>
           <div className="flex justify-between  my-12">
           <input className="email-input px-5" placeholder="Email" ></input>
           <button className="subscribe-button px-5 py-1">Subscribe</button>
           </div>
          <div className="flex justify-between my-6">
            <img src="./facebook.png" alt="facebook" />
            <img src="./twitter.png" alt="twitter" />
            <img src="./instagram.png" alt="instagram" />
            <img src="./linkedin.png" alt="linkedin" />
            <img src="./discord.png" alt="discord" />
          </div>
          <p className="my-6">
            @2023 All rights reserved.
          </p>
          </div>
      <div className="footerGradientDiv flex">
      <Image 
          src="/largerGradient.png"
          alt="footer gradient"
          width="300"
          height="300"
          className="footerGradient"
          />
      <Image 
          src="/largerGradient.png"
          alt="footer gradient"
          width="500"
          height="100"
          className="footerGradient"
          />
      </div>
          <div className="flex justify-evenly">
            <div className="px-8">
            Network
            <ul>
            <li className="">Text 1</li>
            <li className="">Text 1</li>
            </ul>
            </div>
            <div>
            Network
            <ul>
            <li className="">Text 1</li>
            <li className="">Text 1</li>
            <li className="">Text 1</li>
            <li className="">Text 1</li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
