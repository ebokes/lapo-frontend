import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-violet1 text-white1 foreground hover:bg-violet1/90 ",
        blue: "bg-blue1 text-white1 foreground hover:bg-blue1/90 rounded-[4px]",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-[8px]",
        gradient:
          "bg-gradient3 text-white1 hover:bg-gradient1/80 rounded-[32px] font-extralight",
        ghost: "hover:bg-accent text-blue1 hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "text-lg px-6 py-3",
        sm: "h-9 text-sm px-3",
        lg: "h-12 text-lg px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

// import Link from "next/link";
// import React from "react";

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   children?: React.ReactNode;
//   bg?: string;
//   color?: string;
//   py?: string;
//   px?: string;
//   w?: string;
//   href?: string;
//   btnText?: string;
//   gap?: string;
//   type?: "submit" | "button" | "reset";
//   fontSize?: string;
//   onClick?: () => void;
// }

// export const Button = ({
//   children,
//   bg,
//   color,
//   py,
//   px,
//   w,
//   href,
//   type,
//   onClick,
//   fontSize,
//   ...props
// }: ButtonProps) => {
//   return (
//     <>
//       {type === "submit" || type === "button" || type === "reset" ? (
//         <button
//           type={type}
//           onClick={onClick}
//           className={`${bg || "bg-violet1"} ${py || "py-4"} ${
//             px || "px-8"
//           } rounded-full ${fontSize || "text-2xl"} ${color || "text-white1"} ${
//             w || "w-full"
//           } font-semibold`}
//           {...props}
//         >
//           {children}
//         </button>
//       ) : (
//         <Link
//           href={href || "/"}
//           className={`${bg || "bg-violet1"} ${py || "py-3"} ${
//             px || "px-8"
//           } rounded-full font-medium ${fontSize || "text-2xl"}  ${
//             color || "text-white1"
//           }  font-semibold `}
//         >
//           {children}
//         </Link>
//       )}
//     </>
//   );
// };
