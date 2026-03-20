import { notFound } from "next/navigation";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { projects, getProjectBySlug, getAdjacentProjects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: project.color + "30" }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-32 h-32 text-verde-green/20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
              />
            </svg>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-verde-dark/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 w-full">
          <FadeIn>
            <span className="text-xs tracking-widest text-verde-accent uppercase">{project.category}</span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-light text-white mt-2">{project.title}</h1>
            <p className="text-white/70 mt-3 sm:mt-4 max-w-xl text-base sm:text-lg">{project.description}</p>
          </FadeIn>
        </div>
      </section>

      {/* Info Bar */}
      <section className="bg-verde-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { label: "Konum", value: project.location },
              { label: "Yıl", value: project.year },
              { label: "Alan", value: project.area },
              { label: "Müşteri", value: project.client },
            ].map((info) => (
              <div key={info.label}>
                <div className="text-xs tracking-widest text-verde-accent uppercase">{info.label}</div>
                <div className="text-sm text-white/80 mt-1">{info.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-verde-dark">Proje Hakkında</h2>
            <p className="text-verde-muted mt-4 sm:mt-6 leading-relaxed text-base sm:text-lg">{project.longDescription}</p>
          </FadeIn>

          <FadeIn delay={200}>
            <div>
              <h3 className="text-xl font-light text-verde-dark mb-4">Proje Özellikleri</h3>
              <ul className="space-y-3">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-verde-muted">
                    <span className="w-1.5 h-1.5 bg-verde-accent rounded-full shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Gallery placeholder */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-[4/3] bg-verde-light/15 flex items-center justify-center overflow-hidden"
              >
                <div className="text-center">
                  <svg
                    className="w-12 h-12 text-verde-green/30 mx-auto mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-verde-green/40 text-xs">Galeri {i}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Sustainability Badges */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <FadeIn>
          <h3 className="text-xl sm:text-2xl font-light text-verde-dark mb-6 sm:mb-8">Sürdürülebilirlik Özellikleri</h3>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {project.sustainability.map((badge) => (
              <span
                key={badge}
                className="px-3 sm:px-5 py-2 bg-verde-accent/10 text-verde-dark text-xs sm:text-sm tracking-wide border border-verde-accent/20"
              >
                {badge}
              </span>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Prev / Next Navigation */}
      <section className="border-t border-verde-light/20 mt-10 sm:mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {prev ? (
              <Link
                href={`/projeler/${prev.slug}`}
                className="py-6 sm:py-12 pr-4 sm:pr-8 group hover:bg-verde-dark/[0.02] transition-colors min-h-[44px] border-b sm:border-b-0 border-verde-light/20"
              >
                <span className="text-xs tracking-widest text-verde-muted uppercase">Önceki Proje</span>
                <h4 className="text-base sm:text-lg font-light text-verde-dark mt-1 group-hover:text-verde-accent transition-colors">
                  {prev.title}
                </h4>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/projeler/${next.slug}`}
                className="py-6 sm:py-12 pl-0 sm:pl-8 text-left sm:text-right sm:border-l border-verde-light/20 group hover:bg-verde-dark/[0.02] transition-colors min-h-[44px]"
              >
                <span className="text-xs tracking-widest text-verde-muted uppercase">Sonraki Proje</span>
                <h4 className="text-base sm:text-lg font-light text-verde-dark mt-1 group-hover:text-verde-accent transition-colors">
                  {next.title}
                </h4>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
