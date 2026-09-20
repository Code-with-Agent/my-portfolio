"use client";

import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "icon";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, children, disabled, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3884ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#070a0f] disabled:opacity-50 disabled:pointer-events-none disabled:hover:translate-y-0 cursor-pointer select-none";

    const variants = {
      primary:
        "bg-gradient-to-r from-[#0a6ed1] to-[#0070f2] hover:from-[#0070f2] hover:to-[#3884ff] text-white font-semibold shadow-lg shadow-[#0a6ed1]/25 hover:shadow-[#0a6ed1]/40 border border-[#3884ff]/50",
      secondary:
        "bg-[#0f1624] hover:bg-[#141e30] text-slate-200 hover:text-white border border-white/[0.1] hover:border-[#3884ff]/40 shadow-sm",
      ghost:
        "text-slate-300 hover:text-white hover:bg-white/[0.06] border border-transparent",
      icon:
        "p-2.5 rounded-xl bg-[#0f1624] hover:bg-[#141e30] text-slate-300 hover:text-white border border-white/[0.08] hover:border-[#3884ff]/40 shadow-sm min-h-[44px] min-w-[44px]",
    };

    const sizes = {
      sm: "text-xs px-3 py-2 gap-1.5 min-h-[38px] sm:min-h-[36px]",
      md: "text-xs sm:text-sm px-4 py-2.5 gap-2 min-h-[44px]",
      lg: "text-sm sm:text-base px-6 py-3.5 gap-2.5 min-h-[48px]",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          baseStyles,
          variants[variant],
          variant !== "icon" && sizes[size],
          className
        )}
        {...props}
      >
        {isLoading && (
          <span className="w-4 h-4 mr-2 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
