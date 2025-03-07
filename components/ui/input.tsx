import * as React from "react";

import { cn } from "@/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  label?: string;
  important?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, important, ...props }, ref) => {
    return (
      <div>
        {label && (
          <label className="text-[1.4rem] text-gray-700 dark:text-gray-300 mb-2">
            {label} {important && <span className="-ml-[0.4rem]">*</span>}
          </label>
        )}
        <input
          type={type}
          className={cn(
            "flex h-9 w-full rounded-[0.8rem] border border-zinc-200 bg-transparent px-4 py-6 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-[1.4rem] file:font-medium mt-2file:text-zinc-950 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 text-[1.4rem] dark:border-zinc-800 dark:file:text-zinc-50 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
