import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`container-app w-full max-w-[1320px] mx-auto px-7 md:px-12 ${className}`}
    >
      {children}
    </div>
  );
}