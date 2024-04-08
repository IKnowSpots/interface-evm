/* eslint-disable @next/next/no-img-element */
"use client";
import { fetchIfDeployed, deploy } from "@/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import LoadingModal from "@/components/LoadingModal";
import DashboardComponent from "@/components/dashboard/DashboardComponent";
import Navbar from "@/components/navbar/NavbarCreate";
import { useAccount } from "wagmi";
import WalletsProvider from "@/components/wallets";


const Dashboard = () => {
  const [isDeployed, setIsDeployed] = useState<Boolean>(false);
  const [loading, setLoading] = useState<Boolean>(false);
  const [username, setUsername] = useState<String>()
  const account = useAccount()
  console.log("The account is", account)
  useEffect(() => {
    checkDeployment();
  }, []);

  // comment line 18-26 to make this page static

  // useEffect(() => {
  //     if (isDeployed == true) {
  //         pushPage();
  //     }
  // }, [isDeployed]);

  // function pushPage() {
  //     window.location.replace("/dashboard/active");
  // }

  async function checkDeployment() {
    setLoading(true);
    const data = await fetchIfDeployed();
    console.log("deploy", data);
    setIsDeployed(data);
    if (isDeployed) {
      window.location.reload()
    }
    setLoading(false);
  }

  async function setUsernameCall() {
    if (!account.address) {
      // can be made beautiful
      //can add custom module for this
      window.alert("Connect your wallet first")
      return
    }
    console.log("username: ", username)
    if (username == '') {
      window.alert('Username should not be blank')
    }
    setLoading(true);
    await deploy(username);
    setIsDeployed(true);
    setLoading(false);
  }



  return (

    <div>
      <LoadingModal visible={loading ? true : false} />
      {/* <RenderSetUsername /> */}
      {isDeployed ? <DashboardComponent /> : (<>
        <div className="text-white flex bg-[#25143a] h-screen gap-4">
          <div className="bg-[#624c9ba6] border-white border-opacity-60 rounded-lg">
            <div className="w-[45vw] h-[100%] flex rounded-xl justify-center items-center">
              <div className="bg-createEvent blur-[150px] absolute w-full h-[80vh]" />

              <img
                src="/events/3.jpeg"
                className=" flex w-[80%] h-[80%] rounded-2xl"
                alt="welcome image"
              />
            </div>
          </div>

          <div className="flex flex-col m-6 justify-between items-center w-[100%]">
            <div className="flex justify-start items-start overflow-hidden">
              <div className="grad1 blur-[100px] h-[80vh] w-[20%] flex absolute">
              </div>
              <div className="ml-[500px]">
                <WalletsProvider />
              </div>
            </div>
            <div className="my-6">
              <Link href="/">
                <Image
                  src={"/iks-logo.png"}
                  width={300}
                  height={100}
                  alt="iks logo"
                  className=""
                />
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center gap-2">
                <div className="flex flex-row items-center w-3/4 gap-2">
                  <h3 className="text-3xl mb-4 ">Welcome</h3>
                  <h1 className="text-4xl mb-4 animate-wave ">👋🏻</h1>
                </div>
                <p className="w-3/4 text-[rgba(255,255,255,0.65)] font-light">
                  Today is a new day. It&apos;s your day. You shape it. Your
                  username, your entry ticket.{" "}
                </p>
                <div className="flex flex-col w-3/4 pb-8">
                  <label htmlFor="username" className={`font-lg py-2`}>
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    // value={username}
                    placeholder="iknowspots"
                    className={`px-4 py-2 rounded-xl my-2 text-black`}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <button
                    className="get-started-btn py-3 rounded-xl bg-[#162D3A] my-2"
                    onClick={setUsernameCall}
                  >
                    Set Username
                  </button>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-[rgba(255,255,255,0.65)] text-sm">
                © 2023 ALL RIGHTS RESERVED
              </p>
            </div>
          </div>
        </div>{" "}
      </>)}

    </div>
  );
};

export default Dashboard;
