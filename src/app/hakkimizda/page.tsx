import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";

const teamMembers = [
  { name: "Mimar Elif Verde", role: "Kurucu & Baş Mimar", specialty: "Sürdürülebilir Mimarlık" },
  { name: "Can Toprak", role: "Kıdemli Mimar", specialty: "Yeşil Bina Tasarımı" },
  { name: "Zeynep Orman", role: "İç Mimar", specialty: "Biyofilik Tasarım" },
  { name: "Ahmet Yeşil", role: "Peyzaj Mimarı", specialty: "Ekolojik Peyzaj" },
  { name: "Selin Dalga", role: "Sürdürülebilirlik Uzmanı", specialty: "LEED Danışmanlığı" },
  { name: "Burak Taş", role: "Proje Yöneticisi", specialty: "Yapı Denetimi" },
];

const awards = [
  { year: "2024", title: "Ulusal Mimarlık Ödülü", org: "Mimarlar Odası", desc: "Yeşil Vadi Konutları" },
  { year: "2023", title: "Sürdürülebilir Yapı Ödülü", org: "ÇEDBİK", desc: "Eko Ofis Merkezi" },
  { year: "2023", title: "En İyi Kamu Binası", org: "Arkitera", desc: "Botanik Kültür Merkezi" },
  { year: "2022", title: "Yeşil Bina Liderliği", org: "USGBC Turkey", desc: "LEED Platinum Başarısı" },
];

export default function HakkimizdaPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          label="Hakkımızda"
          title="Doğaya Saygılı Mimarlığın Öncüsü"
          description="2012'den bu yana sürdürülebilir mimarlık alanında öncü projeler geliştiriyoruz. Her tasarımımız, doğal çevreye saygı ve gelecek nesillere karşı sorumluluk bilinciyle şekillenir."
        />
      </section>

      {/* Founder */}
      <section className="pb-24 lg:pb-32 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="relative aspect-[3/4] bg-verde-light/20 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-verde-accent/20 mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 text-verde-green/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <p className="text-verde-green/50 text-sm">Kurucu Profil Görseli</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div>
              <span className="text-xs tracking-widest text-verde-accent uppercase">Kurucu & Baş Mimar</span>
              <h2 className="text-3xl md:text-4xl font-light text-verde-dark mt-2">Mimar Elif Verde</h2>
              <div className="mt-6 space-y-4 text-verde-muted leading-relaxed">
                <p>
                  İstanbul Teknik Üniversitesi Mimarlık Fakültesi mezunu Elif Verde, yüksek lisansını MIT&apos;de
                  Sürdürülebilir Tasarım alanında tamamlamıştır.
                </p>
                <p>
                  12 yıllık kariyerinde 45&apos;ten fazla projeye imza atan Verde, Türkiye&apos;de sürdürülebilir
                  mimarlık alanının öncü isimlerinden biridir. LEED AP ve BREEAM Assessor sertifikalarına sahiptir.
                </p>
                <p>
                  &ldquo;Mimarlık, doğayla yarışmak değil, doğayla dans etmektir&rdquo; felsefesiyle çalışmalarını
                  sürdürmektedir.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 lg:py-32 bg-verde-dark/[0.02]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading label="Ekibimiz" title="Uzman Kadromuz" center />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <FadeIn key={member.name} delay={i * 100}>
                <div className="bg-white/80 p-8 text-center hover:shadow-lg transition-shadow duration-500">
                  <div className="w-20 h-20 rounded-full bg-verde-light/30 mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-8 h-8 text-verde-green/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-light text-verde-dark">{member.name}</h3>
                  <p className="text-sm text-verde-accent mt-1">{member.role}</p>
                  <p className="text-sm text-verde-muted mt-2">{member.specialty}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading label="Ödüller" title="Başarılarımız" />

        <div className="mt-16 space-y-0">
          {awards.map((award, i) => (
            <FadeIn key={award.title} delay={i * 100}>
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-8 border-b border-verde-light/20">
                <span className="text-2xl font-light text-verde-accent w-20 shrink-0">{award.year}</span>
                <div className="flex-1">
                  <h4 className="text-lg font-light text-verde-dark">{award.title}</h4>
                  <p className="text-sm text-verde-muted mt-1">{award.org}</p>
                </div>
                <span className="text-sm text-verde-muted">{award.desc}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
