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
  const backgrounds = {
    default: "bg-transparent",

    white: `
      bg-white/55
      backdrop-blur-md
    `,

    gradient: `
      bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.06),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.06),transparent_36%)]
    `,
  };

  return (
    <section
      className={`
        relative
        isolate
        overflow-hidden

        py-14
        sm:py-16
        lg:py-20
        xl:py-24

        ${backgrounds[background]}

        ${className}
      `}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200/70 to-transparent" />

      {children}
    </section>
  );
}