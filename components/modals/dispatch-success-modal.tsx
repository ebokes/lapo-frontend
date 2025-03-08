"use client";

import success from "@/assets/card-request-icons/success.svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Modal from "../ui/modal";

function DispatchSuccessModal({ onClose }: { onClose: () => void }) {
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
          Card batch successfully sent to dispatch.
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
export default DispatchSuccessModal;
