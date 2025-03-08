"use client";
import FeesTable from "@/components/tables/card-fees-table";
import useToggle from "@/components/hooks/use-toggle";
import { FeeModal } from "@/components/modals/fee-modal";
import Section from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Plus } from "lucide-react";
import { SlideRight, ZoomIn } from "@/app/transition";
import { cardFeesData } from "@/utils/data";
import CardFeesTable from "@/components/tables/card-fees-table";

const CreateProfile = () => {
  const {
    isToggled: showModal,
    toggleOn: openModal,
    toggleOff: closeModal,
  } = useToggle();

  return (
    <>
      <SlideRight>
        <div>
          <h2 className="font-semibold text-3xl mb-2 ">Create Profile</h2>
          <p className="text-gray-600">
            Fill in profile details and add card fee.
          </p>
          <div className="border border-gray2 my-6 rounded-[0.8rem] bg-white1 p-5">
            <h2 className="font-medium">Profile Details</h2>
            <form action="">
              <div className="grid grid-cols-1 gap-x-20 gap-y-4 py-4 md:grid-cols-2">
                <Input
                  label="Card Name"
                  placeholder="Enter card name"
                  important
                />
                <Input label="Bin Prefix" placeholder="000000" />
                <Select defaultValue={"verve"}>
                  <SelectTrigger label="Card Scheme" important />
                  <SelectContent>
                    <SelectItem value="verve" defaultChecked>
                      Verve
                    </SelectItem>
                    <SelectItem value="master-card">Master Card</SelectItem>
                    <SelectItem value="visa">Visa</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  label="Expiration"
                  placeholder="0"
                  type="number"
                  important
                />
                <Input label="Description" placeholder="Description" />
                <Select defaultValue={"ngn"}>
                  <SelectTrigger label="Currency" important />
                  <SelectContent>
                    <SelectItem value="ngn">NGN</SelectItem>
                    <SelectItem value="usd">USD</SelectItem>
                    <SelectItem value="gbp">GBP</SelectItem>
                  </SelectContent>
                </Select>
                <Input label="Branch Blacklist" placeholder="Head Office" />
              </div>
            </form>
          </div>
          <Section title="Fees">
            <Button variant={"blue"} onClick={openModal} asChild>
              <div>
                <span className="flex items-center">
                  <Plus size={20} className="mr-2 mb-[.2rem]" />
                  <p> Add Fee</p>
                </span>
              </div>
            </Button>

            <CardFeesTable tableData={cardFeesData} />
          </Section>
          <Button variant={"blue"} className="px-14 md:px-[10rem] py-5">
            <div>
              <span className="flex items-center">
                <p className="text-2xl">Create Profile</p>
              </span>
            </div>
          </Button>
        </div>
      </SlideRight>
      {showModal && <FeeModal onClose={closeModal} />}
    </>
  );
};

export default CreateProfile;
