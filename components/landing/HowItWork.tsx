import HowItWorksSingleComponent from "./HowItWorkSingleComponent";

const HowItWork = () => {
  return (
    <div className=" w-full flex justify-center items-center ">
      <div className=" w-full h-full flex flex-col md:flex-row gap-6 justify-center items-center md:items-baseline my-16 ">
      <HowItWorksSingleComponent title="Improved user experience" icons="drive-add-icon.png" desc="NFT tickets offer convenience, bought and stored digitally, eliminating the hassle of carrying traditional paper tickets."/>
      <HowItWorksSingleComponent title="Enhanced members engagement" icons="drive-upload-icon.png" desc="Event organizers use NFTs for fan engagement, offering backstage access and meet-and-greet opportunities to enhance experiences."/>
      <HowItWorksSingleComponent title="Data Analytics" icons="playlist-icon.png" desc="iknowspots collect data from event attendees, enhancing experiences and creating new revenue opportunities through analysis."/>
      </div>
    </div>
  );
};
export default HowItWork;
