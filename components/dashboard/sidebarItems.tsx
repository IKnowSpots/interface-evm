import Image from "next/image";

const SidebarItems = ({ section_name, icon_name,page_name } : {section_name: string, icon_name: string,page_name:string}) => {
  // console.log(section_name, icon_name);
  // console.log(active,section_name)
  return (
    <div className={`items-center mb-4 py-2 pl-2 flex text-lg ${window.location.pathname.split("/").at(-1) == page_name ? "sidebar-bg" : " "} `}>
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
