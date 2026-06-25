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
        rounded-[30px]
        border
        border-white/70
        bg-white/78
        p-6
        backdrop-blur-2xl

        shadow-[0_10px_40px_rgba(15,23,42,0.06)]

        transition-all
        duration-500

        hover:-translate-y-1
        hover:border-sky-200
        hover:shadow-[0_25px_80px_rgba(37,99,235,0.10)]

        sm:p-8
        lg:p-10

        ${className}
      `}
    >
      {/* Ambient Light */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      >
        <div
          className="
            absolute
            -left-20
            -top-20
            h-60
            w-60
            rounded-full
            bg-blue-200/20
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -bottom-20
            -right-20
            h-60
            w-60
            rounded-full
            bg-emerald-200/20
            blur-3xl
          "
        />
      </div>

      <div className="relative z-10">
        {title && (
          <h3 className="mb-4 text-xl font-semibold tracking-tight text-slate-900 lg:text-2xl">
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