import Image from "next/image"

const HeroSection = () => {
    return(
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
    )
}
export default HeroSection