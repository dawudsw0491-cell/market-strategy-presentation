import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  background?: "white" | "gradient";
  className?: string;
}

export default function Section({
  children,
  background = "white",
  className = "",
}: SectionProps) {
  const backgroundClass =
    background === "gradient"
      ? "bg-gradient-to-b from-slate-50 via-white to-sky-50/40"
      : "bg-transparent";

  return (
    <section
      className={`section-space ${backgroundClass} ${className}`}
    >
      {children}
    </section>
  );
}