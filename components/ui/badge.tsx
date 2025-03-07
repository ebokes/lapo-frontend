import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-[16px] font-normal border px-5 py-2 text-xl font-medium transition-colors w-fit ",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-900/80 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/80",
        outline: "text-zinc-950 dark:text-zinc-50",
        pending: "text-gray-700 bg-gray-50 border-gray-200",
        ready: "text-green-500 bg-green-50 border-green-200",
        inProgress: "text-[#85470b] bg-[#fffaeb] border-[#fedf89]",
        acknowledged: "text-blue-700 bg-blue-50 border-blue-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
