import Image from "next/image";

const SidebarItems = ({ section_name, icon_name } : {section_name: string, icon_name: string}) => {
  console.log(section_name, icon_name);
  return (
    <div className="items-center py-2 flex  text-lg">
      <Image
        src={`/icons/${icon_name}.png`}
        width="30"
        height="100"
        alt="home fill"
      />
      <p className="px-4">{`${section_name}`}</p>
    </div>
  );
};
export default SidebarItems;
