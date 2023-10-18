import Image from "next/image";
import MyCalendar from "./MyCalender";
import CardsInventory from "../cardsInventory";

const Events = () => {
    return (
        <div className="flex items-center justify-center ">
            <div className="w-full flex relative z-5">
                <div className="w-full flex flex-col items-center">
                    <div className="flex justify-center w-[80%] gap-8">
                        <button className="bg-white w-[20%] p-3 rounded-[30px] text-[#090312] font-semibold">
                            All Events
                        </button>
                        <button className="bg-white/50 w-[20%] p-3 rounded-[30px] text-[#090312] font-semibold">
                            Upcoming
                        </button>
                        <button className="bg-white/50 w-[20%] p-3 rounded-[30px] text-[#090312] font-semibold">
                            Attended
                        </button>
                    </div>
                    <CardsInventory
                        image="/solidity.jpeg"
                        name="Solidity Bootcamp"
                        description="Intensive Solidity Bootcamp: Develop smart contracts, DApps, and excel in blockchain."
                        username=""
                        date=""
                    />
                    <CardsInventory
                        image="/hacker.jpeg"
                        name="Hacker Hostel"
                        description="Intensive Solidity Bootcamp: Develop smart contracts, DApps, and excel in blockchain."
                        username=""
                        date=""
                    />
                    <CardsInventory
                        image="/tpg.jpeg"
                        name="TPG Meetup"
                        description="Gathering for tech enthusiasts to network,
                        learn, and share industry insights."
                        username=""
                        date=""
                    />
                </div>
            </div>
        </div>
    );
};
export default Events;
