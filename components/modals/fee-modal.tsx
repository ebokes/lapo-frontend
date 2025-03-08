"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Plus } from "lucide-react";
import Modal from "../ui/modal";

export function FeeModal({ onClose }: { onClose: () => void }) {
  return (
    <Modal
      isOpen={true}
      onClose={onClose}
      header={
        <div className="flex items-center gap-4">
          <span className="flex p-5 border border-gray-200 rounded-[8px]">
            <span className="border-2 border-gray-400 rounded-[4px]">
              <Plus size={20} />
            </span>
          </span>
          <span>
            <h2 className="font-semibold">Add Fee</h2>
            <p className="text-gray-500 text-lg">Fill in fee details.</p>
          </span>
        </div>
      }
      footer={
        <Button variant={"blue"} asChild className="w-full" onClick={onClose}>
          <div>
            <span className="flex items-center">
              <p> Add Fee</p>
            </span>
          </div>
        </Button>
      }
    >
      <div className="grid gap-4">
        <div className="space-y-1">
          <Input
            label="Fee Name"
            id="feeName"
            placeholder="Maintenance"
            important
          />
        </div>
        <div className="space-y-1">
          <Input
            label="Value"
            id="value"
            type="number"
            min={0}
            placeholder="0"
          />
        </div>
        <div className="space-y-2">
          <Label>Currency</Label>
          <RadioGroup className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem id="ngn" value="NGN" />
              <Label htmlFor="ngn">NGN</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem id="usd" value="USD" />
              <Label htmlFor="usd">USD</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="space-y-2">
          <Label>Fee Frequency</Label>
          <RadioGroup className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem id="oneoff" value="One Off" />
              <Label htmlFor="oneoff">One Off</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem id="monthly" value="Monthly" />
              <Label htmlFor="monthly">Monthly</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="space-y-2">
          <Label>Fee Impact</Label>
          <RadioGroup className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem id="issuance" value="Issuance" />
              <Label htmlFor="issuance">Issuance</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem id="pinreissue" value="Pin Reissue" />
              <Label htmlFor="pinreissue">Pin Reissue</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="space-y-2">
          <Label>Account Pad</Label>
          <RadioGroup className="flex gap-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem id="none" value="None" />
              <Label htmlFor="none">None</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem id="branchPrefix" value="Branch Code Prefix" />
              <Label htmlFor="branchPrefix">Branch Code Prefix</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem id="branchSuffix" value="Branch Code Suffix" />
              <Label htmlFor="branchSuffix">Branch Code Suffix</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="space-y-1">
          <Input
            label="Account"
            id="accountNumber"
            placeholder="Enter account number"
          />
        </div>
      </div>
    </Modal>
  );
}
