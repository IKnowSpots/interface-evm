"use client";
import { fetchUsername } from "@/utils";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [username, setUsername] = useState<String>("");
  const [loading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    getUsernameCall();
  }, []);

  async function getUsernameCall() {
    setLoading(true);
    let varUsername: any = await fetchUsername();
    setUsername(varUsername);
    // setUsername("");
    setLoading(false);
  }

  console.log("check2", username);

  if (username != "") {
    redirect("/dashboard/active");
  }

  return (
    <div>
      <RenderSetUsername />
    </div>
  );
};

function RenderSetUsername() {
  return (
    <div className="text-white flex bg-[#25143a] ">
      <div className="bg-[#242424BF] border-white border-opacity-60 rounded-lg">
        <img src="/events/3.png" className="w-[876px] h-[864px] p-4 " />
      </div>
      <div className=" flex flex-col justify-between items-center  ">
        <div className="">
          <Image
            src={"/iks-logo.png"}
            width={300}
            height={100}
            alt="iks logo"
            className="pt-12"
          />
        </div>
        <div className="pl-8 ml-8">
          <h3 className="text-3xl py-4">Welcome 👋🏻</h3>
          <p className="w-3/4 text-[rgba(255,255,255,0.65)] font-light">
            Today is a new day. It's your day. You shape it. Your username, your
            entry ticket.{" "}
          </p>
          <div className="flex flex-col w-3/4 py-8">
            <label htmlFor="username" className="font-lg py-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="iknowspots"
              className="px-4 py-2 rounded-xl my-2 "
            />
            <button className=" py-3 rounded-xl bg-[#162D3A] my-2">
              Get Started
            </button>
          </div>
        </div>
        <div className="py-4">
          <p className="text-[rgba(255,255,255,0.65)] text-sm">
            © 2023 ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
