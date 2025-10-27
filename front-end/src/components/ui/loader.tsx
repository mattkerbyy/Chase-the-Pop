import React from "react";

interface LoaderProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Loader({ size = "md", className = "" }: LoaderProps) {
  const sizeMap: Record<string, string> = {
    sm: "h-3 w-3 border-2",
    md: "h-4 w-4 border-2",
    lg: "h-6 w-6 border-2",
  };

  return (
    <span
      role="status"
      className={`inline-flex items-center justify-center ${className}`}
    >
      <span
        className={`animate-spin rounded-full border-current border-solid ${sizeMap[size]} border-t-transparent`}
      />
    </span>
  );
}

export default Loader;
