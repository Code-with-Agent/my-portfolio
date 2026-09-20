import React from "react";
import { cn } from "@/lib/utils";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function HeroDisplay({ children, className, as: Component = "h1", ...props }: TypographyProps) {
  return (
    <Component
      className={cn(
        "text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function Heading1({ children, className, as: Component = "h1", ...props }: TypographyProps) {
  return (
    <Component
      className={cn(
        "text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function Heading2({ children, className, as: Component = "h2", ...props }: TypographyProps) {
  return (
    <Component
      className={cn(
        "text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function Heading3({ children, className, as: Component = "h3", ...props }: TypographyProps) {
  return (
    <Component
      className={cn(
        "text-lg sm:text-xl font-semibold tracking-tight text-white leading-snug",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function BodyText({ children, className, as: Component = "p", ...props }: TypographyProps) {
  return (
    <Component
      className={cn(
        "text-sm sm:text-base text-slate-300 leading-relaxed",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function SmallText({ children, className, as: Component = "p", ...props }: TypographyProps) {
  return (
    <Component
      className={cn(
        "text-xs sm:text-sm text-slate-400 leading-normal",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function Eyebrow({ children, className, as: Component = "span", ...props }: TypographyProps) {
  return (
    <Component
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0f1624] border border-[#3884ff]/30 text-xs font-mono text-[#3884ff] tracking-wide uppercase shadow-sm",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function MetadataText({ children, className, as: Component = "span", ...props }: TypographyProps) {
  return (
    <Component
      className={cn(
        "text-[11px] font-mono text-slate-400 tracking-wide",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
