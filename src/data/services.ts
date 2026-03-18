export interface Service {
  id: number;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 1,
    title: "Mimari Tasarım",
    shortDescription: "Doğayla uyumlu, sürdürülebilir mimari çözümler",
    longDescription:
      "Her projeyi çevresel bağlamında değerlendirerek, doğayla uyumlu ve sürdürülebilir mimari çözümler üretiyoruz. Pasif tasarım stratejileri, enerji verimliliği ve yeşil bina sertifikasyon süreçlerini projenin başından itibaren entegre ediyoruz. Konut, ticari, kamu ve karma kullanımlı yapılarda uzmanlaşmış ekibimiz, her ölçekte projede aynı titizliği göstermektedir.",
    icon: "M3 21h18M3 7v14M21 7v14M6 11h.01M6 15h.01M6 19h.01M10 11h.01M10 15h.01M10 19h.01M14 11h.01M14 15h.01M14 19h.01M18 11h.01M18 15h.01M18 19h.01M12 3l9 4-9 4-9-4 9-4z",
    features: [
      "Konsept Tasarım & Fizibilite",
      "Schematic Design & Uygulama Projeleri",
      "3D Görselleştirme & Maket",
      "Yapı İzleme & Kontrol",
    ],
  },
  {
    id: 2,
    title: "İç Mekan Tasarımı",
    shortDescription: "Doğal malzemeler ve biyofilik iç mekan tasarımı",
    longDescription:
      "Doğal malzemeler, biyofilik tasarım prensipleri ve sağlıklı iç ortam kalitesini ön planda tutarak yaşam ve çalışma alanlarınızı dönüştürüyoruz. Her mekanı, kullanıcının fiziksel ve psikolojik refahını artıracak şekilde tasarlıyoruz. VOC-free boyalar, doğal kumaşlar ve geri dönüştürülmüş malzemeler tercih ediyoruz.",
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
    features: [
      "Biyofilik Tasarım Danışmanlığı",
      "Malzeme Seçimi & Tedarik",
      "Mobilya Tasarımı",
      "Aydınlatma Tasarımı",
    ],
  },
  {
    id: 3,
    title: "Peyzaj Tasarımı",
    shortDescription: "Ekolojik peyzaj ve kentsel yeşil alan tasarımı",
    longDescription:
      "Yerli bitki türleri, su tasarruflu sulama sistemleri ve ekolojik habitat oluşturma prensipleriyle peyzaj tasarımları gerçekleştiriyoruz. Kentsel dönüşüm parkları, yeşil çatılar, yağmur bahçeleri ve topluluk bahçeleri konularında uzman ekibimiz, her projeyi bulunduğu coğrafyanın ekosistemini destekleyecek şekilde planlamaktadır.",
    icon: "M5 3v4M3 5h4M6 17v4M4 19h4M13 3l2 2-2 2M19.07 4.93l-1.41 1.41M20 12h-4M17.66 17.66l-1.41-1.41M12 20v-4M6.34 17.66l1.41-1.41M4 12h4M7.34 6.34L8.75 7.75",
    features: [
      "Ekolojik Peyzaj Planlaması",
      "Yağmur Bahçesi Tasarımı",
      "Yeşil Çatı Uygulamaları",
      "Kentsel Dönüşüm Projeleri",
    ],
  },
  {
    id: 4,
    title: "Sürdürülebilirlik Danışmanlığı",
    shortDescription: "LEED, BREEAM sertifikasyon ve enerji verimliliği danışmanlığı",
    longDescription:
      "Yeşil bina sertifikasyon süreçlerinde (LEED, BREEAM, DGNB) uzman danışmanlık hizmeti sunuyoruz. Enerji modellemesi, yaşam döngüsü analizi, karbon ayak izi hesaplama ve sürdürülebilir malzeme seçimi konularında kapsamlı destek sağlıyoruz. Mevcut yapıların yeşil dönüşüm süreçlerini de yönetiyoruz.",
    icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
    features: [
      "LEED & BREEAM Sertifikasyon",
      "Enerji Modellemesi",
      "Yaşam Döngüsü Analizi",
      "Karbon Ayak İzi Hesaplama",
    ],
  },
];
