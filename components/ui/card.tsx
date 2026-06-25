import { ReactNode } from "react";

interface CardProps {
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

export default function Card({
  title,
  description,
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-slate-200/70
        bg-white/90
        p-6
        shadow-[0_10px_40px_rgba(15,23,42,0.06)]
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-200
        hover:shadow-[0_20px_60px_rgba(37,99,235,0.12)]
        sm:p-8
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-emerald-50/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10">
        {title && (
          <h3 className="mb-4 text-xl font-bold leading-tight text-slate-900 lg:text-2xl">
            {title}
          </h3>
        )}

        {description && (
          <p className="leading-8 text-slate-600">
            {description}
          </p>
        )}

        {children && (
          <div className="mt-6">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}