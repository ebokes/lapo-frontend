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
      {/* Body of the modal: the form fields */}
      <div className="grid gap-4">
        {/* Fee Name */}
        <div className="space-y-1">
          <Input
            label="Fee Name"
            id="feeName"
            // value={feeName}
            // onChange={(e) => setFeeName(e.target.value)}
            placeholder="Maintenance"
            important
          />
        </div>

        {/* Value */}
        <div className="space-y-1">
          <Input
            label="Value"
            id="value"
            type="number"
            min={0}
            // value={value}
            // onChange={(e) => setValue(e.target.value)}
            placeholder="0"
          />
        </div>

        {/* Currency */}
        <div className="space-y-2">
          <Label>Currency</Label>
          <RadioGroup
            // value={currency}
            // onValueChange={(val: string) => setCurrency(val)}
            className="flex space-x-4"
          >
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

        {/* Fee Frequency */}
        <div className="space-y-2">
          <Label>Fee Frequency</Label>
          <RadioGroup
            // value={feeFrequency}
            // onValueChange={(val: string) => setFeeFrequency(val)}
            className="flex space-x-4"
          >
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

        {/* Fee Impact */}
        <div className="space-y-2">
          <Label>Fee Impact</Label>
          <RadioGroup
            // value={feeImpact}
            // onValueChange={(val: string) => setFeeImpact(val)}
            className="flex space-x-4"
          >
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

        {/* Account Pad */}
        <div className="space-y-2">
          <Label>Account Pad</Label>
          <RadioGroup
            // value={accountPad}
            // onValueChange={(val: string) => setAccountPad(val)}
            className="flex gap-4"
          >
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

        {/* Account */}
        <div className="space-y-1">
          <Input
            label="Account"
            id="accountNumber"
            // value={accountNumber}
            // onChange={(e) => setAccountNumber(e.target.value)}
            placeholder="Enter account number"
          />
        </div>
      </div>
    </Modal>
  );
}
