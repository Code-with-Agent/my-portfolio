import React from "react";
import { cn } from "@/lib/utils";

interface BackgroundProps {
  showGrid?: boolean;
  showGlow?: boolean;
  className?: string;
}

export function Background({ showGrid = true, showGlow = true, className }: BackgroundProps) {
  return (
    <div className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}>
      {/* Subtle fine grid */}
      {showGrid && (
        <div className="absolute inset-0 sap-grid-bg opacity-70" />
      )}

      {/* Primary SAP blue radial glow */}
      {showGlow && (
        <>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-[#0a6ed1]/10 blur-[140px] rounded-full" />
          <div className="absolute top-1/3 right-[-100px] w-[450px] h-[450px] bg-[#3884ff]/08 blur-[120px] rounded-full" />
        </>
      )}
    </div>
  );
}
