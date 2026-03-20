import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/data/services";
import Link from "next/link";

export default function HizmetlerPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          label="Hizmetlerimiz"
          title="Sürdürülebilir Tasarım Çözümleri"
          description="Mimari tasarımdan sürdürülebilirlik danışmanlığına, kapsamlı hizmet yelpazemizle projelerinize değer katıyoruz."
        />
      </section>

      {/* Services Detail Blocks */}
      <section className="pb-16 sm:pb-24 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-16 sm:space-y-24">
          {services.map((service, i) => (
            <FadeIn key={service.id} delay={i * 100}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center ${
                  i % 2 !== 0 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Content */}
                <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 text-verde-accent">
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
                    <span className="text-xs tracking-widest text-verde-accent uppercase">
                      0{service.id}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-light text-verde-dark">{service.title}</h3>
                  <p className="text-verde-muted mt-4 leading-relaxed">{service.longDescription}</p>

                  <ul className="mt-8 space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-verde-text">
                        <span className="w-1.5 h-1.5 bg-verde-accent rounded-full shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                  <div className="relative aspect-[4/3] bg-verde-light/15 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <svg
                          className="w-20 h-20 text-verde-green/30 mx-auto mb-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth={1}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                        </svg>
                        <p className="text-verde-green/50 text-sm">{service.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 lg:py-32 bg-verde-dark/[0.03]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-verde-dark">
              Projeniz İçin Doğru Çözümü Birlikte Bulalım
            </h2>
            <p className="text-verde-muted mt-4 max-w-lg mx-auto leading-relaxed text-sm sm:text-base">
              Her projenin kendine özgü ihtiyaçları vardır. Sizin için en uygun hizmet paketini belirleyelim.
            </p>
            <Link
              href="/iletisim"
              className="inline-block mt-6 sm:mt-8 px-8 sm:px-10 py-4 min-h-[44px] bg-verde-dark text-white text-sm tracking-widest hover:bg-verde-green transition-colors duration-500"
            >
              İLETİŞİME GEÇİN
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
