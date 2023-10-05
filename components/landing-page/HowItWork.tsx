import HowItWorksSingleComponent from "./HowItWorkSingleComponent";

const HowItWork = () => {
  return (
    <div className=" w-full flex justify-around my-16 ">
      <HowItWorksSingleComponent icons="drive-add-icon.png" />
      <HowItWorksSingleComponent icons="drive-upload-icon.png" />
      <HowItWorksSingleComponent icons=".png" />
    </div>
  );
};
export default HowItWork;
