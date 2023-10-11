import Image from "next/image"

const HowItWorksSingleComponent = ({icons, title, desc}: {icons: any, title: any, desc: any}) =>{
    return(
        
            <div className="bg-[#141118] flex flex-col w-1/4 rounded-lg px-12 py-8 mx-4 items-center text-center">
              <Image
                src={`/icons/${icons}`}
                width="50"
                height="50"
                alt="icon drive add icon"
              />
              <h3 className="font-semibold mt-2 mb-3">{title}</h3>
              <p className="opacity-75">
                {desc}
              </p>
            </div>
    )
}
export default HowItWorksSingleComponent;
