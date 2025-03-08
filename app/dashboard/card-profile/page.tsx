import { ZoomIn } from "@/app/transition";
import CardProfileTable from "@/components/tables/card-profile-table";
import { Button } from "@/components/ui/button";
import Searchbar from "@/components/ui/searchbar";
import { profileTableData } from "@/utils/data";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

const CardProfile = () => {
  return (
    <ZoomIn>
      <h2 className="font-semibold text-3xl mb-2 ">Card Profile</h2>
      <p className="text-gray-600">Create, view and edit card profiles here.</p>
      <hr className="w-full my-5 border-gray-300" />
      <div className="flex justify-between gap-8 flex-wrap items-center">
        <Searchbar
          rounded="rounded-[0.8rem]"
          placeholder="Search by card name"
          className="py-3 max-w-[400px]"
        />
        <Button variant={"blue"} asChild>
          <Link href="card-profile/create-profile">
            <span className="flex items-center">
              <Plus size={20} className="mr-2 mb-[.2rem]" />
              <p> Add Profile</p>
            </span>
          </Link>
        </Button>
      </div>
      <hr className="my-5 border-gray-300" />
      <CardProfileTable tableData={profileTableData} />
    </ZoomIn>
  );
};

export default CardProfile;
