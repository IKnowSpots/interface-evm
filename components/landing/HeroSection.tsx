import Image from "next/image"
import Link from "next/link"

const HeroSection = () => {
  return (
    <div className="w-full h-[550px] md:h-[650px] lg:h-[800px] xl:h-auto">
      <div className="top-[17%] lg:top-[35%] flex flex-col justify-center items-center text-center w-full absolute z-[5]">
        <h1 className="text-[2.5rem] sm:text-8xl font-bold text-gradient ">
          Introducing <span className="block">iknowspots</span>
        </h1>
        <p className="m-5 text-lg sm:text-xl">
          Seamless granular events hosting with NFT tickets.
        </p>
        <Link className="" target="_blank" href="https://www.loom.com/share/5cee5fd7ee6d477e976f246fbda9ac21?sid=666d8812-f4a4-4d07-ab34-4310cdd08c4b">
        <button className="cta-button w-full px-4 sm:px-6 py-1 text-[0.8rem] sm:text-[1rem]">Demo Video</button>
        </Link>
      </div>
      
      <div id="parent-div" className="relative hidden sm:flex w-full p-6 flex justify-center items-center">
        <Image
          src="/circles.png"
          width="1500"
          height="50"
          className="opacity-20  "
          alt="Circle" />
        <Image
          src="/circles-mirror.png"
          width="1500"
          height="100"
          className="absolute top-0 rotate-12 opacity-20"
          alt="Circle" />
      </div>
      <div>
        {/* <img src="/tpg.jpeg" alt="" className="absolute top-[95%] left-[10%] h-auto w-[30%] rotate-[25deg] skew-y-6 rounded-2xl"/> */}
      </div>
    </div>
  )
}
export default HeroSection