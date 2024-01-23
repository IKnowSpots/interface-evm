import React from "react";

export default function Partners() {
  return (
    <div className="flex flex-col justify-center ">
      <div className="flex items-center justify-center">
        <p className=" text-base sm:text-xl sm:w-[40rem] flex text-center px-4 mb-4 sm:mb-16">
          Trusted by the world&apos; best product teams. From next-gen startups
          to established communities.
        </p>
      </div>
      <div className="my-8 mx-8 sm:mx-[6rem] lg:mx-[10rem] grid col-auto gap-4 grid-cols-2 place-items-center md:grid-cols-4">
        <img
          src="/tpg.svg"
          alt="/polygon.png"
          height={60}
          width={150}
          className=""
        />
        <img
          src="/Chillinq.svg"
          alt="/polygon.png"
          height={30}
          width={110}
          className=""
        />
        <img
          src="/TLC.svg"
          alt="/polygon.png"
          height={60}
          width={120}
          className=""
        />
        {/* <img src='/arata.svg' alt="/polygon.png" height={50} width={110} className=""/> */}
        <img
          src="/sukrit.svg"
          alt="/polygon.png"
          height={30}
          width={100}
          className=""
        />
      </div>
    </div>
  );
}
