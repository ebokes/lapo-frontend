import ProfileTable from "@/components/card-profile/profile-table";
import { Button } from "@/components/ui/button";
import Searchbar from "@/components/ui/searchbar";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

const data = [
  {
    id: 1,
    cardName: "Verve-1",
    currency: "NGN",
    expiration: "40 months",
    binPrefix: 50611234,
    dateCreated: "11/10/2024  23:21:03",
  },
  {
    id: 2,
    cardName: "Verve-2",
    currency: "NGN",
    expiration: "40 months",
    binPrefix: 50611234,
    dateCreated: "11/10/2024  23:21:03",
  },
  {
    id: 3,
    cardName: "Verve-3",
    currency: "NGN",
    expiration: "40 months",
    binPrefix: 50611234,
    dateCreated: "11/10/2024  23:21:03",
  },
  {
    id: 4,
    cardName: "Verve-4",
    currency: "NGN",
    expiration: "40 months",
    binPrefix: 50611234,
    dateCreated: "11/10/2024  23:21:03",
  },
];

const CardProfile = () => {
  return (
    <div>
      <h2 className="font-semibold text-3xl mb-2 ">Card Profile</h2>
      <p className="text-gray-600">Create, view and edit card profiles here.</p>
      <hr className="w-full my-5 border-gray-300" />
      <div className="flex justify-between items-center">
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
      <ProfileTable tableData={data} />
    </div>
  );
};

export default CardProfile;
