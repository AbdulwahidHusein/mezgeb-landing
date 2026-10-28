import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Slot } from "radix-ui";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap font-medium outline-none transition-[background-color,border-color] duration-300 focus-visible:ring-2 focus-visible:ring-[var(--white-24)] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "btn-luna",
        destructive:
          "rounded-[40px] bg-destructive text-white hover:bg-destructive/90",
        outline: "btn-luna-outline",
        secondary: "btn-luna",
        ghost: "rounded-[40px] hover:bg-[var(--white-4)] hover:text-white",
        link: "text-white underline-offset-4 hover:underline",
      },
      size: {
        default: "text-[14px]",
        sm: "px-3 py-1 text-[12px]",
        lg: "px-5 py-2.5 text-[14px]",
        icon: "size-10 !rounded-[40px] !p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
