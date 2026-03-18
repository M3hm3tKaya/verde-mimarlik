"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";

export default function IletisimPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Hero */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          label="İletişim"
          title="Birlikte Çalışalım"
          description="Projeleriniz hakkında konuşmak, teklif almak veya ofisimizi ziyaret etmek için bize ulaşın."
        />
      </section>

      {/* Contact Content */}
      <section className="pb-24 lg:pb-32 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <FadeIn>
            <div>
              <h3 className="text-2xl font-light text-verde-dark mb-8">İletişim Bilgileri</h3>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 text-verde-accent shrink-0 mt-1">
                    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-light text-verde-dark">Adres</h4>
                    <p className="text-verde-muted mt-1">
                      Levent Mah. Yeşil Sokak No: 12<br />
                      Beşiktaş, İstanbul 34330
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 text-verde-accent shrink-0 mt-1">
                    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-light text-verde-dark">Telefon</h4>
                    <p className="text-verde-muted mt-1">+90 212 555 0808</p>
                    <p className="text-verde-muted">+90 532 555 0808</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 text-verde-accent shrink-0 mt-1">
                    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-light text-verde-dark">E-posta</h4>
                    <p className="text-verde-muted mt-1">info@verdemimarlik.com</p>
                    <p className="text-verde-muted">projeler@verdemimarlik.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 text-verde-accent shrink-0 mt-1">
                    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-light text-verde-dark">Çalışma Saatleri</h4>
                    <p className="text-verde-muted mt-1">Pazartesi - Cuma: 09:00 - 18:00</p>
                    <p className="text-verde-muted">Cumartesi: 10:00 - 14:00</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={200}>
            <div className="bg-white/80 p-8 lg:p-12">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-verde-accent/20 mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-8 h-8 text-verde-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-light text-verde-dark">Mesajınız Alındı</h3>
                  <p className="text-verde-muted mt-4">En kısa sürede size dönüş yapacağız.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-light text-verde-dark mb-6">Mesaj Gönderin</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="text-xs tracking-widest text-verde-muted uppercase block mb-2">
                        Ad Soyad
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-transparent border border-verde-light/30 text-verde-text text-sm focus:outline-none focus:border-verde-accent transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-xs tracking-widest text-verde-muted uppercase block mb-2">
                        E-posta
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-transparent border border-verde-light/30 text-verde-text text-sm focus:outline-none focus:border-verde-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="text-xs tracking-widest text-verde-muted uppercase block mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-transparent border border-verde-light/30 text-verde-text text-sm focus:outline-none focus:border-verde-accent transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="text-xs tracking-widest text-verde-muted uppercase block mb-2">
                        Konu
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-transparent border border-verde-light/30 text-verde-text text-sm focus:outline-none focus:border-verde-accent transition-colors"
                      >
                        <option value="">Seçiniz</option>
                        <option value="proje">Yeni Proje</option>
                        <option value="danismanlik">Danışmanlık</option>
                        <option value="isbirligi">İş Birliği</option>
                        <option value="diger">Diğer</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="text-xs tracking-widest text-verde-muted uppercase block mb-2">
                      Mesajınız
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-transparent border border-verde-light/30 text-verde-text text-sm focus:outline-none focus:border-verde-accent transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-verde-accent text-white text-sm tracking-widest hover:bg-verde-green transition-colors duration-500"
                  >
                    GÖNDER
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-80 bg-verde-light/15 flex items-center justify-center">
        <div className="text-center">
          <svg className="w-12 h-12 text-verde-green/30 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <p className="text-verde-green/50 text-sm">Harita Alanı</p>
        </div>
      </section>
    </>
  );
}
