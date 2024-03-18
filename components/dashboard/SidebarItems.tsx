import Image from "next/image";

const NewSidebarItems = ({
    section_name,
    icon_name,
    page_name,
    isActive,
}: {
    section_name: string;
    icon_name: string;
    page_name: string;
    isActive: boolean;
}) => {
    const location = window.location.pathname.split("/").at(-1);
    // console.log(section_name, icon_name);
    // console.log(active,section_name)
    // console.log(window.location.pathname.split("/").at(-1));
    // console.log(window.location.pathname.split("/").at(-1) == (page_name || "manage") )
    return (
        <div
            className={`items-center mb-4 py-2 pl-2 flex text-lg ${
                location == page_name || location == "manage" || isActive
                    ? "sidebar-bg"
                    : " "
            } `}
        >
            <Image
                src={`/icons/${icon_name}.png`}
                width="25"
                height="100"
                alt="home fill"
            />
            <p className="px-2 text-base">{`${section_name}`}</p>
        </div>
    );
};
export default NewSidebarItems;
