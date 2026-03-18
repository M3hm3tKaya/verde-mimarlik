import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

const stats = [
  { value: "45+", label: "Tamamlanan Proje" },
  { value: "12", label: "Yıllık Deneyim" },
  { value: "LEED", label: "Sertifikalı Yapılar" },
  { value: "%40", label: "Enerji Tasarrufu" },
];

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden -mt-20">
        {/* Background placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-verde-dark via-verde-green to-verde-dark" />
        <div className="absolute inset-0 bg-black/30" />

        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full border border-verde-accent/20 opacity-40" />
        <div className="absolute bottom-32 left-16 w-96 h-96 rounded-full border border-verde-accent/10 opacity-30" />

        <div className="relative z-10 text-center px-6">
          <FadeIn>
            <h1 className="text-7xl md:text-9xl font-light tracking-[0.2em] text-white mb-2">
              VERDE
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-xl md:text-2xl tracking-[0.4em] text-verde-accent font-light">
              MİMARLIK
            </p>
          </FadeIn>
          <FadeIn delay={400}>
            <p className="mt-8 text-white/70 max-w-lg mx-auto text-base md:text-lg leading-relaxed">
              Doğayla uyumlu, sürdürülebilir mimari çözümler
            </p>
          </FadeIn>
          <FadeIn delay={600}>
            <Link
              href="/projeler"
              className="inline-block mt-10 px-8 py-3 border border-verde-accent text-verde-accent text-sm tracking-widest hover:bg-verde-accent hover:text-white transition-all duration-500"
            >
              PROJELERİMİZ
            </Link>
          </FadeIn>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-px h-16 bg-white/30 relative overflow-hidden">
            <div className="w-px h-8 bg-verde-accent absolute top-0 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              label="Felsefemiz"
              title="Doğaya Saygılı Mimarlık"
              description="Her projemizde doğal çevreye minimum etki ile maksimum yaşam kalitesi sunmayı hedefliyoruz. Sürdürülebilirlik sadece bir tercih değil, tasarım felsefemizin temelidir."
            />
          </div>
          <FadeIn delay={200}>
            <div className="relative aspect-[4/3] bg-verde-light/20 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="w-20 h-20 text-verde-green/40 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M5 3v4M3 5h4M6 17v4M4 19h4M13 3l2 2-2 2M19.07 4.93l-1.41 1.41M20 12h-4M17.66 17.66l-1.41-1.41"
                    />
                  </svg>
                  <p className="text-verde-green/60 text-sm">Felsefe Görseli</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 lg:py-32 bg-verde-dark/[0.02]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Öne Çıkan Projeler"
            title="Son Çalışmalarımız"
            description="Sürdürülebilirlik ilkelerimizle şekillenen en güncel projelerimiz."
          />

          <div className="mt-16 space-y-8">
            {featuredProjects.map((project, i) => (
              <FadeIn key={project.id} delay={i * 150}>
                <Link href={`/projeler/${project.slug}`} className="group block">
                  <div className="relative w-full aspect-[21/9] overflow-hidden bg-verde-light/10">
                    <div
                      className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.02]"
                      style={{ backgroundColor: project.color + "20" }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                          className="w-24 h-24 text-verde-green/20"
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

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-verde-dark/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8 md:p-12">
                      <div>
                        <span className="text-xs tracking-widest text-verde-accent uppercase">
                          {project.category}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-light text-white mt-2">{project.title}</h3>
                        <p className="text-white/70 mt-2 max-w-lg">{project.description}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={300}>
            <div className="mt-12 text-center">
              <Link
                href="/projeler"
                className="inline-block px-8 py-3 border border-verde-dark text-verde-dark text-sm tracking-widest hover:bg-verde-dark hover:text-white transition-all duration-500"
              >
                TÜM PROJELER
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 100}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-light text-verde-dark">{stat.value}</div>
                <div className="text-sm text-verde-muted mt-2 tracking-wide">{stat.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-24 lg:py-32 bg-verde-dark/[0.02]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Hizmetlerimiz"
            title="Ne Yapıyoruz?"
            center
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <FadeIn key={service.id} delay={i * 100}>
                <div className="bg-white/80 p-8 hover:shadow-lg transition-shadow duration-500 group">
                  <div className="w-12 h-12 mb-6 text-verde-accent">
                    <svg
                      className="w-full h-full"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-light text-verde-dark group-hover:text-verde-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-verde-muted mt-3 leading-relaxed">{service.shortDescription}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <span className="text-xs tracking-[0.3em] uppercase text-verde-accent block mb-4">
              İLETİŞİME GEÇİN
            </span>
            <h2 className="text-3xl md:text-5xl font-light text-verde-dark leading-tight">
              Projenizi Birlikte<br />Hayata Geçirelim
            </h2>
            <p className="text-verde-muted mt-6 max-w-lg mx-auto leading-relaxed">
              Sürdürülebilir bir gelecek için ilk adımı atın. Projeleriniz hakkında konuşalım.
            </p>
            <Link
              href="/iletisim"
              className="inline-block mt-8 px-10 py-4 bg-verde-dark text-white text-sm tracking-widest hover:bg-verde-green transition-colors duration-500"
            >
              İLETİŞİM
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
