import Image from "next/image"

const HowItWorksSingleComponent = ({icons}) =>{
    return(
        
            <div className="bg-[#141118]   flex flex-col w-1/4 rounded-lg px-12 py-8 mx-4 items-center text-center">
              <Image
                src={`/icons/${icons}`}
                width="50"
                height="50"
                alt="icon drive add icon"
              />
              <h3>Set up your wallet</h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
    )
}
export default HowItWorksSingleComponent;
