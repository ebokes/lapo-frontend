import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { capitalizeWord } from "@/utils/functn";
import { usePathname } from "next/navigation";
import { BsQuestionCircle, BsQuestionCircleFill } from "react-icons/bs";
import Searchbar from "../ui/searchbar";
import { MdNotifications, MdOutlineNotificationsNone } from "react-icons/md";
import { Bell } from "lucide-react";

export const Header = () => {
  const pathname = usePathname();
  const getTitleFromPath = (path: string) => {
    const pathName = path.split("/").pop();
    return pathName ? capitalizeWord(pathName.replace("-", " ")) : "Dashboard";
  };
  const title = getTitleFromPath(pathname);
  return (
    <div className="flex justify-between items-center gap-4 w-full py-6 flex-nowrap md:flex-wrap z-[101]">
      <div className="flex justify-between w-fit items-center gap-x-8 gap-y-4 flex-wrap">
        <h2 className="font-semibold text-3xl">{title}</h2>
      </div>
      <div className="hidden md:flex gap-8 items-center">
        <Bell />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        {/* <Avatar firstName="James" lastName="Bond" src={img} /> */}
      </div>
    </div>
  );
};
