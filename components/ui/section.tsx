import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "default" | "white" | "gradient";
}

export default function Section({
  children,
  className = "",
  background = "default",
}: SectionProps) {
  const backgroundClass = {
    default: "bg-transparent",
    white: "bg-white/55 backdrop-blur-sm",
    gradient:
      "bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.05),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.05),transparent_35%)]",
  };

  return (
    <section
      className={`
        relative
        overflow-hidden
        py-16
        md:py-20
        lg:py-24
        ${backgroundClass[background]}
        ${className}
      `}
    >
      {children}
    </section>
  );
}