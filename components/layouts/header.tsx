import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { capitalizeWord } from "@/utils/functn";
import { Bell } from "lucide-react";
import { usePathname } from "next/navigation";
import GoBack from "../ui/go-back";

export const Header = () => {
  const pathname = usePathname();
  const getTitleFromPath = (path: string) => {
    const pathName = path.split("/").pop();
    return pathName ? capitalizeWord(pathName.replace("-", " ")) : "Dashboard";
  };
  const title = getTitleFromPath(pathname);
  return (
    <div className="flex justify-between items-center gap-4 w-full py-6 flex-nowrap md:flex-wrap z-[101]">
      <div className="hidden lg:flex justify-between w-fit items-center gap-x-8 gap-y-4 flex-wrap">
        <GoBack currentPageTitle={title} />
        {/* <h2 className="font-semibold text-3xl">{title}</h2> */}
      </div>
      <div className="w-2" />
      <div className="flex gap-8 items-center">
        <Bell />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};
