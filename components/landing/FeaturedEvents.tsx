import CardsFeatured from "../cardsFeatured";

const FeaturedEvents = () => {
    return (
        <div className="flex justify-around p-10">
            <CardsFeatured image={"1.png"} name="Lorem Ipsum" price="1.20" date="01.34.45" />
            <CardsFeatured image={"2.png"} name="Lorem Ipsum" price="1.20" date="01.34.45" />
            <CardsFeatured image={"3.png"} name="Lorem Ipsum" price="1.20" date="01.34.45" />
            <CardsFeatured image={"4.png"} name="Lorem Ipsum" price="1.20" date="01.34.45" />
        </div>
    );
};
export default FeaturedEvents;
