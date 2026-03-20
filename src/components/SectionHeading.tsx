import FadeIn from "./FadeIn";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeading({ label, title, description, center = false }: SectionHeadingProps) {
  return (
    <FadeIn className={center ? "text-center" : ""}>
      {label && (
        <span className="text-xs tracking-[0.3em] uppercase text-verde-accent block mb-3">{label}</span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-verde-dark leading-tight">{title}</h2>
      {description && (
        <p className="text-verde-muted mt-3 sm:mt-4 max-w-2xl leading-relaxed text-sm sm:text-base md:text-lg">
          {description}
        </p>
      )}
    </FadeIn>
  );
}
