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
      className={`card h-full rounded-[32px] p-8 lg:p-10 ${className}`}
    >
      {title && (
        <h3 className="mb-5 text-2xl font-bold tracking-tight text-slate-900">
          {title}
        </h3>
      )}

      {description && (
        <p className="leading-8 text-slate-600">
          {description}
        </p>
      )}

      {children}
    </div>
  );
}