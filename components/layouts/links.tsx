import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { LinkProps } from "./link-data";

const Links = ({ path, label, icon: Icon }: LinkProps) => {
  const currentRoute = usePathname();
  const isActive =
    currentRoute === path || path?.includes(currentRoute.split("/")[2]);

  return (
    <NextLink href={path || "#"}>
      <div
        className={`flex items-center gap-4 rounded-[8px] px-6 py-3 cursor-pointer transition 
          ${
            isActive
              ? "bg-[#F6F6F6]  border text-[#014DAF]"
              : "bg-transparent font-light my-[1px] text-[#808080]"
          } 
          hover:bg-[#F6F6F6]`}
      >
        {/* Render Icon with dynamic color */}
        {Icon && <Icon bg={isActive ? "#014DAF" : "#808080"} size={20} />}

        <p>{label}</p>
      </div>
    </NextLink>
  );
};

export default Links;
