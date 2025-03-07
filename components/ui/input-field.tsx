"use client";

import React, { Fragment, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

interface InputProps {
  label?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  register?: object;
  required?: boolean;
  disabled?: boolean;
  errorMessage?: string;
  important?: boolean;
  href?: string;
  customClass?: string;
  isPinCreated?: boolean;
  defaultValue?: string;
}

export const Input = ({
  label,
  type,
  name,
  placeholder,
  onChange,
  value,
  register,
  required,
  disabled,
  errorMessage,
  customClass,
  defaultValue,
  ...inputProps
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex w-full flex-1 flex-col py-3">
      <div className="flex justify-between w-full">
        {label && (
          <label className="font-light relative mb-2">
            {label}
            {required && (
              <span className="text-red-500 text-xl ml-1 absolute top-0">
                *
              </span>
            )}
          </label>
        )}
      </div>
      <div className="relative">
        <input
          type={showPassword ? "text" : type}
          name={name}
          placeholder={placeholder}
          className={`border w-full pl-7 ${
            errorMessage ? "border-red-500" : "border-[#0000001a]"
          }  bg-white1 rounded-full px-4 py-2 sm:py-4 disabled:bg-gray-100 ${
            errorMessage && "outline-red-500"
          } ${customClass}`}
          autoComplete="off"
          onChange={onChange}
          value={value}
          {...register}
          disabled={disabled}
          required={required}
          {...inputProps}
          defaultValue={defaultValue}
        />
        {type === "password" && (
          <button
            className="absolute inset-y-0 right-0 flex items-center px-4 bg-transparent border-transparent"
            onClick={togglePasswordVisibility}
            type="button"
          >
            {showPassword ? (
              <IoMdEye className="text-gray-400 text-3xl" />
            ) : (
              <IoMdEyeOff className="text-3xl" />
            )}
          </button>
        )}
      </div>
      {errorMessage && (
        <div className="h-5">
          <div>
            <p className="text-red-500 mt-1 text-[11px]">{errorMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

interface LabelInputProps {
  label?: string;
  placeholder: string;
  type?: string;
  bg?: string;
  footer?: React.ReactNode;
  rows?: number;
  inputProps?: InputProps;
}

export const LabelInput = ({
  label,
  placeholder,
  type,
  bg,
  footer,
  rows,
  ...inputProps
}: LabelInputProps) => {
  return (
    <div
      className={`flex gap-3 ${
        bg || "bg-gray1"
      }  border rounded-xl py-3 px-5 w-full relative`}
    >
      <label className="min-w-fit font-semibold">{label}</label>
      {type === "textarea" ? (
        <Fragment>
          <textarea
            rows={rows || 9}
            placeholder={placeholder}
            className={`w-full outline-none ${bg || "bg-gray1"}`}
          />
          <div className="absolute bottom-3 left-3">{footer}</div>
        </Fragment>
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          className="bg-gray1 w-full outline-none"
          {...inputProps}
        />
      )}
    </div>
  );
};
