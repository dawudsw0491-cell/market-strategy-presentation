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
    primary:
      "bg-gradient-to-r from-blue-600 via-sky-500 to-emerald-500 text-white shadow-lg hover:shadow-xl hover:-translate-y-1",

    secondary:
      "bg-slate-900 text-white hover:bg-slate-800",

    outline:
      "border border-slate-300 bg-white text-slate-800 hover:border-blue-500 hover:text-blue-600 hover:-translate-y-1",
  };

  const style = `
    inline-flex
    items-center
    justify-center
    rounded-full
    px-7
    py-3.5
    font-semibold
    transition-all
    duration-300
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
    <button className={style}>
      {children}
    </button>
  );
}