import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useCallback } from "react";

interface GoBackProps {
  currentPageTitle?: string;
  previousPageTitle?: string;
}
const GoBack = ({ currentPageTitle, previousPageTitle }: GoBackProps) => {
  const router = useRouter();

  const back = useCallback(() => {
    router.back();
  }, [router]);
  return (
    <div className="flex gap-1 text-xl">
      <div onClick={back} className="flex gap-1 items-center cursor-pointer">
        <ChevronLeft size={16} />
        <p>{previousPageTitle}</p>
        {/* <p className="px-2 text-gray3">
          {" "}
          <ChevronRight size={14} />
        </p> */}
      </div>
      <p className="font-semibold text-3xl">{currentPageTitle}</p>
    </div>
  );
};

export default GoBack;
