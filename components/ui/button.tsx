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
  href = "#",
  variant = "primary",
  className = "",
}: ButtonProps) {
  const variants = {
    primary:
      "bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-lg shadow-blue-500/20 hover:-translate-y-0.5 hover:shadow-xl",

    secondary:
      "bg-white text-slate-900 border border-slate-200 hover:border-sky-200 hover:bg-sky-50",

    outline:
      "border border-slate-300 bg-transparent text-slate-700 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50",
  };

  return (
    <Link
      href={href}
      className={`
        inline-flex
        min-h-[52px]
        items-center
        justify-center
        rounded-full
        px-7
        lg:px-8
        text-sm
        lg:text-base
        font-semibold
        transition-all
        duration-300
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </Link>
  );
}