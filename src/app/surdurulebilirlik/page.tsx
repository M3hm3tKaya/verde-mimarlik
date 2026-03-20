import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";

const principles = [
  {
    id: 1,
    title: "Enerji Verimliliği",
    description:
      "Pasif tasarım stratejileri, yenilenebilir enerji kaynakları ve akıllı bina sistemleri ile enerji tüketimini minimuma indiriyoruz.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    id: 2,
    title: "Su Yönetimi",
    description:
      "Yağmur suyu toplama, gri su geri dönüşümü ve su tasarruflu peyzaj uygulamaları ile su kaynaklarını koruyoruz.",
    icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
  },
  {
    id: 3,
    title: "Sürdürülebilir Malzeme",
    description:
      "Yerel, geri dönüştürülmüş ve düşük karbonlu malzemeleri tercih ederek yapı sektörünün çevresel etkisini azaltıyoruz.",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
  },
  {
    id: 4,
    title: "Biyolojik Çeşitlilik",
    description:
      "Yerli bitki türleri, ekolojik habitat oluşturma ve yeşil altyapı ile kentsel biyolojik çeşitliliği destekliyoruz.",
    icon: "M5 3v4M3 5h4M6 17v4M4 19h4M13 3l2 2-2 2M19.07 4.93l-1.41 1.41M20 12h-4M17.66 17.66l-1.41-1.41M12 20v-4M6.34 17.66l1.41-1.41M4 12h4M7.34 6.34L8.75 7.75",
  },
  {
    id: 5,
    title: "İç Ortam Kalitesi",
    description:
      "Doğal havalandırma, toksik olmayan malzemeler ve biyofilik tasarım ile sağlıklı yaşam ve çalışma alanları oluşturuyoruz.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    id: 6,
    title: "Karbon Nötrlük",
    description:
      "Yaşam döngüsü analizi, karbon dengeleme ve sıfır atık stratejileri ile karbon nötr yapılar hedefliyoruz.",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

const impactStats = [
  { value: "%40", label: "Ortalama Enerji Tasarrufu", description: "Projelerimizde geleneksel yapılara kıyasla" },
  { value: "1.200+", label: "Dikilen Ağaç", description: "Peyzaj projelerimiz kapsamında" },
  { value: "500", label: "Ton CO2 Azaltma", description: "Yıllık karbon ayak izi azaltımı" },
];

export default function SurdurulebilirlikPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          label="Sürdürülebilirlik"
          title="Geleceği Bugünden İnşa Ediyoruz"
          description="Sürdürülebilirlik, Verde Mimarlık'ın sadece bir hizmet alanı değil, var oluş sebebidir. Her projede doğal çevreye saygı, enerji verimliliği ve toplumsal sorumluluk ilkelerini temel alıyoruz."
        />
      </section>

      {/* 6 Principles */}
      <section className="pb-16 sm:pb-24 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {principles.map((principle, i) => (
            <FadeIn key={principle.id} delay={i * 100}>
              <div className="bg-white/80 p-6 sm:p-8 hover:shadow-lg transition-shadow duration-500 h-full">
                <div className="w-12 h-12 text-verde-accent mb-6">
                  <svg
                    className="w-full h-full"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={principle.icon} />
                  </svg>
                </div>
                <span className="text-xs tracking-widest text-verde-accent">0{principle.id}</span>
                <h3 className="text-xl font-light text-verde-dark mt-2">{principle.title}</h3>
                <p className="text-sm text-verde-muted mt-3 leading-relaxed">{principle.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-16 sm:py-24 lg:py-32 bg-verde-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-10 sm:mb-16">
              <span className="text-xs tracking-[0.3em] uppercase text-verde-accent block mb-3">
                ETKİMİZ
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-light">Rakamlarla Sürdürülebilirlik</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
            {impactStats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 150}>
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl md:text-7xl font-light text-verde-accent">{stat.value}</div>
                  <div className="text-lg font-light mt-4">{stat.label}</div>
                  <div className="text-sm text-white/50 mt-2">{stat.description}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading label="Sertifikalar" title="Yeşil Bina Sertifikaları" center />

        <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {[
            { name: "LEED", desc: "Leadership in Energy and Environmental Design", level: "Platinum & Gold" },
            { name: "BREEAM", desc: "Building Research Establishment Assessment Method", level: "Excellent" },
            { name: "DGNB", desc: "German Sustainable Building Council", level: "Gold" },
          ].map((cert, i) => (
            <FadeIn key={cert.name} delay={i * 100}>
              <div className="border border-verde-light/30 p-6 sm:p-8 text-center hover:border-verde-accent/50 transition-colors duration-500">
                <div className="text-3xl font-light text-verde-dark mb-2">{cert.name}</div>
                <div className="text-xs text-verde-muted mb-4">{cert.desc}</div>
                <div className="inline-block px-4 py-1 bg-verde-accent/10 text-verde-accent text-sm">
                  {cert.level}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
