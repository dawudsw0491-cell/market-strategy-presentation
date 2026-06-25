import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const variants = {
    primary: `
      bg-gradient-to-r
      from-blue-600
      via-sky-500
      to-cyan-500
      text-white

      shadow-[0_10px_30px_rgba(37,99,235,.22)]

      hover:-translate-y-0.5
      hover:shadow-[0_18px_40px_rgba(37,99,235,.28)]

      active:translate-y-0
    `,

    secondary: `
      bg-slate-900
      text-white

      hover:bg-slate-800

      shadow-[0_10px_30px_rgba(15,23,42,.15)]
    `,

    outline: `
      border
      border-slate-200

      bg-white/75
      backdrop-blur-xl

      text-slate-700

      hover:border-sky-300
      hover:bg-white
      hover:text-slate-900

      hover:-translate-y-0.5

      shadow-sm
      hover:shadow-lg
    `,
  };

  const style = `
    inline-flex
    items-center
    justify-center

    min-h-12

    rounded-full

    px-7
    py-3.5

    text-sm
    font-semibold
    tracking-wide

    transition-all
    duration-300

    focus:outline-none
    focus:ring-4
    focus:ring-blue-200

    disabled:pointer-events-none
    disabled:opacity-50

    ${variants[variant]}
    ${className}
  `;

  if (href) {
    return (
      <Link
        href={href}
        className={style}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={style}
    >
      {children}
    </button>
  );
}