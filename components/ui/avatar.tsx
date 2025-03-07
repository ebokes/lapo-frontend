"use client";

import { cn } from "@/lib/utils";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import * as React from "react";

const sizeClasses = {
  sm: "h-9 w-9 text-base",
  md: " w-12 text-lg",
  lg: "h-16 w-16 text-2xl",
  xl: "h-20 w-20 text-3xl",
};

const bgColors = [
  "bg-red-100",
  "bg-green-100",
  "bg-blue-100",
  "bg-yellow-100",
  "bg-gray-100",
  "bg-indigo-100",
  "bg-pink-100",
  "bg-purple-100",
];
const getRandomBgColor = () =>
  bgColors[Math.floor(Math.random() * bgColors.length)];

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & {
    size?: "sm" | "md" | "lg" | "xl";
  }
>(({ className, size = "md", ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      `relative flex shrink-0 overflow-hidden z-50 rounded-full  ${sizeClasses[size]}`,
      className
    )}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> & {
    size?: "sm" | "md" | "lg" | "xl";
  }
>(({ className, size = "md", ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      `flex h-full w-full items-center justify-center text-gray-700 rounded-full font-bold ${
        sizeClasses[size]
      } ${getRandomBgColor()}`,
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
