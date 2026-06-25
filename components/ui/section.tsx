import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  background?: "default" | "white" | "gradient";
}

export default function Section({
  id,
  children,
  className = "",
  background = "default",
}: SectionProps) {
  const backgroundClass = {
    default: "bg-transparent",
    white: "bg-white",
    gradient:
      "bg-gradient-to-br from-sky-50 via-white to-emerald-50",
  };

  return (
    <section
      id={id}
      className={`
        relative
        overflow-hidden
        py-20
        lg:py-28
        ${backgroundClass[background]}
        ${className}
      `}
    >
      {children}
    </section>
  );
}