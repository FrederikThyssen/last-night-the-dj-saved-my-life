import { cn } from "@/lib/utils";

type SectionTitleProps = {
  tag?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
};

export default function SectionTitle({
  tag,
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        centered && "mx-auto text-center",
        className
      )}
    >
      {tag && (
        <span className="inline-block mb-3 px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-violet-500/15 text-violet-400 border border-violet-500/30">
          {tag}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold leading-tight",
          light ? "text-white" : "text-white"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            light ? "text-gray-300" : "text-gray-400"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
