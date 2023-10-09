import Image from "next/image";

const CardsActive = ({ image }: {image:any}) => {
  return (
    <div className="flex flex-col ">
      <Image
        src={`/events/${image}`}
        width="300"
        height="400"
        alt="Event 1 Image"
      />
      <div className="flex justify-between my-6">
        <p>Lorum Ipsum</p>
        {/* <p>1.20 Weth</p> */}
        <button className="px-4 py-1 outline rounded-lg">Pause</button>
      </div>
      {/* <hr />
      <div className="flex justify-between my-6">
        <p>End&apos;s In 01.34.45</p>
        <button className="px-4 py-1 outline rounded-lg">Run</button>
      </div> */}
    </div>
  );
};
export default CardsActive;
