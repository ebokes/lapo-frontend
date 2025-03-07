import React from "react";
import { GoSearch } from "react-icons/go";

interface SearchbarProps {
  inputProps?: object;
  placeholder?: string;
  className?: string;
  rounded?: string;
  w?: string;
}

const Searchbar = ({
  placeholder,
  className,
  inputProps,
  rounded,
  w,
}: SearchbarProps) => {
  return (
    <>
      <div
        className={`justify-between bg-white ${
          rounded ?? "rounded-full"
        } border-[1px] border-[gray1] pl-2 pr-6 ${className}`}
      >
        <div className="flex">
          <div className="cursor-pointer rounded-full p-3">
            <GoSearch color="#808080" fontSize={"1.8rem"} />
          </div>
          
          <input
            type="text"
            placeholder={placeholder ?? "Search..."}
            className={`${w} focus:outline-none focus:border-violet1 `}
            {...inputProps}
          />
        </div>
      </div>
    </>
  );
};

export default Searchbar;
