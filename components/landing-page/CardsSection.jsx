import Cards from "../cards";

const CardsSection = () => {
  return (
    <div className="flex justify-around">
      <Cards image={"1.png"} />
      <Cards image={"2.png"} />
      <Cards image={"3.png"} />
      <Cards image={"4.png"} />
    </div>
  );
};
export default CardsSection;
