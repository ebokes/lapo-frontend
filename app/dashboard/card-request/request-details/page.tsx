"use client";

import acknowledged from "@/assets/card-request-icons/acknowledged.svg";
import dispatch from "@/assets/card-request-icons/dispatch.svg";
import inProgress from "@/assets/card-request-icons/in-progress.svg";
import production from "@/assets/card-request-icons/production.svg";
import ready from "@/assets/card-request-icons/ready.svg";
import ActionButtons from "@/components/card-request/action-buttons";
import useToggle from "@/components/hooks/use-toggle";
import DispatchSuccessModal from "@/components/modals/dispatch-success-modal";
import DownloadSuccessModal from "@/components/modals/download-success-modal";
import Section from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SlideRight } from "@/app/transition";

const actionData = [
  {
    id: 1,
    icon: production,
    name: "Download for Production",
    bg: "bg-[#344054]",
  },
  {
    id: 2,
    icon: inProgress,
    name: "Mark as In Progress",
    bg: "bg-[#B54708]",
  },
  {
    id: 3,
    icon: ready,
    name: "Mark as Ready",
    bg: "bg-[#067647]",
  },
  {
    id: 4,
    icon: dispatch,
    name: "Send to Dispatch",
    bg: "bg-[#8020E7]",
  },
  {
    id: 5,
    icon: acknowledged,
    name: "Mark as Acknowledged",
    bg: "bg-[#014DAF]",
  },
];

const RequestDetails = () => {
  const {
    isToggled: showDownloadModal,
    toggleOn: openDownloadModal,
    toggleOff: closeDownloadModal,
  } = useToggle();
  const {
    isToggled: showDispatchModal,
    toggleOn: openDispatchModal,
    toggleOff: closeDispatchModal,
  } = useToggle();

  const handleButtonClick = (id: number) => {
    if (id === 1) {
      openDownloadModal();
    }
    if (id === 4) {
      openDispatchModal();
    }
  };

  return (
    <>
      <SlideRight>
        <h2 className="font-semibold text-3xl mb-2 ">Request Details</h2>
        <p className="text-gray-600">
          Perform predetermined actions on card requests here.
        </p>
        <Section title="Card Request Details">
          {" "}
          <form action="">
            <div className="grid grid-cols-1 gap-x-16 gap-y-6 py-4 md:grid-cols-2">
              <Input
                label="Branch Name"
                placeholder="Coporate"
                className="bg-gray-100 border border-gray-300"
              />
              <Input
                label="Initiator"
                placeholder="Root User"
                className="bg-gray-100 border border-gray-300"
              />
              <Input
                label="Card Type"
                placeholder="Classic Debit"
                className="bg-gray-100 border border-gray-300"
              />
              <Input
                label="Card Charges"
                placeholder="N1,500"
                type="number"
                className="bg-gray-100 border border-gray-300"
              />
              <Input
                label="Quantity"
                placeholder="10"
                type="number"
                className="bg-gray-100 border border-gray-300"
              />
              <Input
                label="Batch"
                placeholder="847264905"
                className="bg-gray-100 border border-gray-300"
              />
              <span>
                <Label>Date Requested</Label>
                <p className="mt-5">11/14/2024 10:27:43</p>
              </span>
              <div className="flex flex-col">
                <Label>Status</Label>
                <Badge variant={"pending"} className="mt-5">
                  Pending
                </Badge>
              </div>
            </div>
            <div className="w-full">
              <h2 className="font-semibold mb-4 mt-9">Actions</h2>
              <div className="flex justify-start xl:justify-between flex-wrap w-full gap-5">
                {actionData.map((item) => (
                  <ActionButtons
                    {...item}
                    key={item.id}
                    onClick={() => handleButtonClick(item.id)}
                  />
                ))}
              </div>
            </div>
          </form>
        </Section>
      </SlideRight>
      {showDownloadModal && (
        <DownloadSuccessModal onClose={closeDownloadModal} />
      )}
      {showDispatchModal && (
        <DispatchSuccessModal onClose={closeDispatchModal} />
      )}
    </>
  );
};

export default RequestDetails;
