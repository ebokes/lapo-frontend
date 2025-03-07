"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Modal from "../ui/modal";
import { Plus } from "lucide-react";
import useToggle from "../hooks/use-toggle";
import Image from "next/image";
import success from "@/assets/card-request-icons/success.svg";

function DownloadSuccessModal({ onClose }: { onClose: () => void }) {
  // const [toggle, setToggle] = React.useState(false);
  // const handleCloseToggle = () => setToggle(false);
  // console.log(toggle);

  const {
    isToggled: showModal,
    toggleOn: openModal,
    toggleOff: closeModal,
  } = useToggle();
  return (
    <Modal
      isOpen={true}
      onClose={onClose}
      noLine
      header={
        <span className="flex p-5 border border-gray-200 rounded-[8px]">
          <Image src={success} alt="download" width={20} height={20} />
        </span>
      }
      mt="-mt-3"
    >
      <span className="mb-8">
        <h2 className="font-medium">Successful</h2>
        <p className="text-gray-500 text-xl">
          Production file has been downloaded.
        </p>
      </span>
      <Button variant={"blue"} onClick={onClose} className="w-fit px-9" asChild>
        <div>
          <span className="flex items-center">
            <p>Continue</p>
          </span>
        </div>
      </Button>
    </Modal>
  );
}
export default DownloadSuccessModal;
