"use client";
import CardsHostee from "@/components/cardsHostee";
import Navbar from "@/components/hostee/Navbar";
import { fetchUsername } from "@/utils";
import { useEffect, useState } from "react";

const EventsByHost = () => {
    const [username, setUsername] = useState("iamacid");
    const [hostAddress, setHostAddress] = useState("88J...MVL8yw");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchUsernameCall();
    }, []);

    async function fetchUsernameCall() {
        setLoading(true);
        let user = await fetchUsername();
        // setUsername(user);
        setUsername("iamacid");
        await getHosteeAddress();
        setLoading(false);
    }

    async function getHosteeAddress() {
        let hostee = "88J...MVL8yw";
        setHostAddress(hostee);
    }

    return (
        <div className=" bg-[#25143a] h-[100%] text-white w-full overflow-hidden">
            <Navbar />
            <div>
                <div className="pb-8">
                    <p className="w-full text-white text-[2rem] ml-[8rem]">
                        @{username}
                    </p>
                    <p className="w-full text-white text-[1rem] ml-[10rem]">
                        {hostAddress}
                    </p>
                </div>

                <div className="flex gap-x-[4rem] gap-y-[3rem] flex-wrap pt-4 px-[4rem] pb-[5rem]">
                    <CardsHostee
                        image={"1.png"}
                        name="Lorem Ipsum"
                        price="1.20"
                        date="01.34.45"
                        username={username}
                    />
                    <CardsHostee
                        image={"2.png"}
                        name="Lorem Ipsum"
                        price="1.20"
                        date="01.34.45"
                        username={username}
                    />
                    <CardsHostee
                        image={"3.png"}
                        name="Lorem Ipsum"
                        price="1.20"
                        date="01.34.45"
                        username={username}
                    />
                    <CardsHostee
                        image={"4.png"}
                        name="Lorem Ipsum"
                        price="1.20"
                        date="01.34.45"
                        username={username}
                    />

                    <CardsHostee
                        image={"1.png"}
                        name="Lorem Ipsum"
                        price="1.20"
                        date="01.34.45"
                        username={username}
                    />
                    <CardsHostee
                        image={"2.png"}
                        name="Lorem Ipsum"
                        price="1.20"
                        date="01.34.45"
                        username={username}
                    />
                    <CardsHostee
                        image={"3.png"}
                        name="Lorem Ipsum"
                        price="1.20"
                        date="01.34.45"
                        username={username}
                    />
                    <CardsHostee
                        image={"4.png"}
                        name="Lorem Ipsum"
                        price="1.20"
                        date="01.34.45"
                        username={username}
                    />
                </div>
            </div>
        </div>
    );
};

export default EventsByHost;
