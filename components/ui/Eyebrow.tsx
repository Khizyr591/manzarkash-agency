import React from "react";
import styles from "@/app/styles/styles";

interface EyebrowProps {
  children: React.ReactNode;
  variant?: "primary" | "white";
  className?: string;
}

export default function Eyebrow({ children, variant = "primary", className = "" }: EyebrowProps) {
  const textColor = variant === "primary" ? "text-primary" : "text-white/60";
  const lineColor = variant === "primary" ? "bg-primary" : "bg-white/40";

  return (
    <span className={`inline-flex items-center gap-2 ${styles.caption_text} !font-semibold !tracking-[0.25em] uppercase ${textColor} ${className}`}>
      <span className={`w-6 h-px inline-block ${lineColor}`} />
      {children}
      <span className={`w-6 h-px inline-block ${lineColor}`} />
    </span>
  );
}
