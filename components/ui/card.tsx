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
        rounded-3xl
        border
        border-slate-200/70
        bg-white/85
        p-8
        shadow-lg
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-200
        hover:shadow-2xl
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-transparent to-emerald-50/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10">
        {title && (
          <h3 className="mb-3 text-2xl font-bold text-slate-900">
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