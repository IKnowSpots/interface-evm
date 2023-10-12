"use client";
import CardsHostee from "@/components/cardsHostee";
import Navbar from "@/components/hostee/Navbar";
import { fetchHosteeAddress, fetchUsernameValidity } from "@/utils";
import { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import Image from "next/image";
import { usePathname } from 'next/navigation';

const EventsByHost = () => {

    const pathName = usePathname();
    const id = pathName?.split("/")[1];

    const [username, setUsername] = useState(`${id}`);
    const [isUsernameValid, setIsUsernameValid] = useState(false)
    const [activeEvents, setActiveEvents] = useState([]);
    const [hostAddress, setHostAddress] = useState<String | undefined>();
    const [loading, setLoading] = useState(false);

    const { wallets } = useWallet();


    useEffect(() => {
        if (id) {
            checkUsernameValidityData();
        }
    }, [id]);

    useEffect(() => {
        fetchHosteeAddressCall();
    }, []);

    async function checkUsernameValidityData() {
        const data = await fetchUsernameValidity(id)
        // setIsUsernameValid(data)
    }

    async function fetchHosteeAddressCall() {
        let hostee = await fetchHosteeAddress()
        hostee = "88J...4RMV8yw";
        setHostAddress(hostee);
    }

    if (loading == true) return <div className="text-white">Fetching..</div>

    // if (loading == false && isUsernameValid == false) return (
    //     <div  className="text-white">User do not exist</div>
    // )

    // if (loading == false && isUsernameValid == true && activeEvents.length == 0) return (
    //     <div>ACTIVE EVENTS <br /> No events</div>
    // )

    return (
        <div className="bg-[#25143a] h-[100%] text-white w-full overflow-hidden">
            <Navbar />
            <div>
                <div className="flex justify-between px-[6rem]">
                    <div className="pb-8">
                        <p className="w-full text-white text-[2rem] ml-[0rem]">
                            @{id}
                        </p>
                        <div className="flex gap-2 justify-center text-center">
                            <Image
                                src={wallets[0].adapter.icon}
                                width="30"
                                height="100"
                                alt="wallet logo"
                            />
                            <p className="w-full text-white text-[1rem] opacity-75">
                                {hostAddress}
                            </p>
                        </div>
                    </div>
                    <input
                        type="text"
                        placeholder="Search events"
                        className="text-white h-[40px] border-white w-[20rem] bg-[#1C1C1C]  rounded-full px-4 "
                    />
                </div>

                <div className="flex gap-x-[2rem] gap-y-[3rem] flex-wrap pt-4 px-[7rem] pb-[5rem]">
                    <CardsHostee
                        image={"1.png"}
                        name="Lorem Ipsum"
                        price="1.20"
                        date="01.34.45"
                        username={username}
                        eventId="01"
                    />
                    <CardsHostee
                        image={"2.png"}
                        name="Lorem Ipsum"
                        price="1.20"
                        date="01.34.45"
                        username={username}
                        eventId="01"
                    />
                    <CardsHostee
                        image={"3.png"}
                        name="Lorem Ipsum"
                        price="1.20"
                        date="01.34.45"
                        username={username}
                        eventId="01"
                    />
                    <CardsHostee
                        image={"4.png"}
                        name="Lorem Ipsum"
                        price="1.20"
                        date="01.34.45"
                        username={username}
                        eventId="01"
                    />

                    <CardsHostee
                        image={"1.png"}
                        name="Lorem Ipsum"
                        price="1.20"
                        date="01.34.45"
                        username={username}
                        eventId="01"
                    />
                    <CardsHostee
                        image={"2.png"}
                        name="Lorem Ipsum"
                        price="1.20"
                        date="01.34.45"
                        username={username}
                        eventId="01"
                    />
                    <CardsHostee
                        image={"3.png"}
                        name="Lorem Ipsum"
                        price="1.20"
                        date="01.34.45"
                        username={username}
                        eventId="01"
                    />
                    <CardsHostee
                        image={"4.png"}
                        name="Lorem Ipsum"
                        price="1.20"
                        date="01.34.45"
                        username={username}
                        eventId="01"
                    />
                </div>
            </div>
        </div>
    );
};

export default EventsByHost;
