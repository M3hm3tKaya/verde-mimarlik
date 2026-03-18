export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  area: string;
  client: string;
  description: string;
  longDescription: string;
  sustainability: string[];
  features: string[];
  images: string[];
  color: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "yesil-vadi-konutlari",
    title: "Yeşil Vadi Konutları",
    category: "Konut",
    location: "İstanbul, Türkiye",
    year: "2024",
    area: "12.500 m²",
    client: "Vadi Yapı A.Ş.",
    description: "Doğayla iç içe, sürdürülebilir yaşam alanları sunan konut projesi.",
    longDescription:
      "Yeşil Vadi Konutları, İstanbul'un kuzeyinde doğal orman alanına komşu konumuyla öne çıkan bir sürdürülebilir konut projesidir. Pasif ev standartlarında tasarlanan yapılar, güneş panelleri, yağmur suyu toplama sistemleri ve yeşil çatı uygulamalarıyla enerji tüketimini minimuma indirir. Her daire, geniş balkonları ve doğal havalandırma sistemleriyle yaşayanlarına sağlıklı bir iç mekan ortamı sunar.",
    sustainability: ["LEED Gold", "Güneş Enerjisi", "Yağmur Suyu Toplama", "Yeşil Çatı"],
    features: ["Pasif Ev Standardı", "Doğal Havalandırma", "Akıllı Ev Sistemleri", "Organik Peyzaj"],
    images: ["/placeholder-project.jpg"],
    color: "#2D6A4F",
  },
  {
    id: 2,
    slug: "eko-ofis-merkezi",
    title: "Eko Ofis Merkezi",
    category: "Ticari",
    location: "Ankara, Türkiye",
    year: "2023",
    area: "8.200 m²",
    client: "Yeşil İş Holding",
    description: "Sıfır karbon ayak izini hedefleyen modern ofis kompleksi.",
    longDescription:
      "Eko Ofis Merkezi, Ankara'nın yeni iş bölgesinde konumlanan ve sıfır karbon ayak izi hedefleyen bir ticari yapı projesidir. Biyofilik tasarım prensipleriyle şekillenen iç mekanlar, çalışanların verimliliğini ve refahını artırmayı amaçlar. Yapının cephesinde kullanılan çift cidarlı cam sistem, doğal ışığı maksimize ederken enerji kaybını önler. Çatıdaki 200 kW güneş paneli sistemi, binanın enerji ihtiyacının %60'ını karşılar.",
    sustainability: ["LEED Platinum", "Sıfır Karbon", "Biyofilik Tasarım", "Çift Cidarlı Cephe"],
    features: ["Açık Ofis Planı", "Yeşil Teras", "Bisiklet Parkı", "Elektrikli Araç Şarj"],
    images: ["/placeholder-project.jpg"],
    color: "#40916C",
  },
  {
    id: 3,
    slug: "botanik-kultur-merkezi",
    title: "Botanik Kültür Merkezi",
    category: "Kamu",
    location: "İzmir, Türkiye",
    year: "2023",
    area: "15.000 m²",
    client: "İzmir Büyükşehir Belediyesi",
    description: "Doğa ve kültürü birleştiren çok işlevli toplum merkezi.",
    longDescription:
      "Botanik Kültür Merkezi, İzmir'in kalbinde doğa ve kültürü bir araya getiren çok işlevli bir kamusal alan projesidir. Tarihi bir botanik bahçesinin yanına konumlanan yapı, çevresindeki yeşil dokuyla organik bir bütünlük oluşturur. İçerisinde sergi salonları, atölye alanları, kütüphane ve amfi tiyatro barındıran merkez, sürdürülebilir malzemeler ve yerel taş kullanılarak inşa edilmiştir.",
    sustainability: ["BREEAM Excellent", "Yerel Malzeme", "Doğal Aydınlatma", "Jeotermal Isıtma"],
    features: ["Amfi Tiyatro", "Sergi Salonları", "Atölye Alanları", "Botanik Bahçe Entegrasyonu"],
    images: ["/placeholder-project.jpg"],
    color: "#52B788",
  },
  {
    id: 4,
    slug: "orman-okulu",
    title: "Orman Okulu",
    category: "Eğitim",
    location: "Bolu, Türkiye",
    year: "2022",
    area: "4.800 m²",
    client: "Doğa Eğitim Vakfı",
    description: "Doğayla öğrenmeyi birleştiren yenilikçi eğitim yapısı.",
    longDescription:
      "Orman Okulu, Bolu ormanları içinde doğa temelli eğitim felsefesiyle tasarlanmış bir ilkokul projesidir. Ahşap taşıyıcı sistem ve yerel malzemelerle inşa edilen yapı, çevresel etkiyi minimumda tutar. Açık hava sınıfları, sera ve permakültür bahçesi ile öğrencilere doğayla iç içe bir eğitim deneyimi sunar.",
    sustainability: ["Ahşap Yapı", "Permakültür", "Yağmur Bahçesi", "Doğal Malzeme"],
    features: ["Açık Hava Sınıfları", "Sera", "Permakültür Bahçesi", "Doğa Gözlem Kulesi"],
    images: ["/placeholder-project.jpg"],
    color: "#8FBC8F",
  },
  {
    id: 5,
    slug: "deniz-kiyisi-otel",
    title: "Deniz Kıyısı Otel",
    category: "Turizm",
    location: "Muğla, Türkiye",
    year: "2024",
    area: "22.000 m²",
    client: "Akdeniz Turizm Yatırım",
    description: "Ege kıyısında sürdürülebilir lüks konaklama deneyimi.",
    longDescription:
      "Deniz Kıyısı Otel, Muğla'nın Ege kıyısında konumlanan sürdürülebilir bir lüks otel projesidir. Yapılar, arazinin doğal topografyasına uyum sağlayacak şekilde kademelendi ve mevcut zeytinlikler korunarak peyzaj tasarımına entegre edildi. Deniz suyu soğutma sistemi ve güneş enerjisiyle desteklenen yapı, çevre dostu bir tatil konsepti sunmaktadır.",
    sustainability: ["Arazi Uyumu", "Deniz Suyu Soğutma", "Zeytin Ağacı Koruma", "Güneş Enerjisi"],
    features: ["Sonsuzluk Havuzu", "Organik Restoran", "Spa & Wellness", "Özel Plaj"],
    images: ["/placeholder-project.jpg"],
    color: "#2D6A4F",
  },
  {
    id: 6,
    slug: "kentsel-donusum-parki",
    title: "Kentsel Dönüşüm Parkı",
    category: "Peyzaj",
    location: "Eskişehir, Türkiye",
    year: "2022",
    area: "35.000 m²",
    client: "Eskişehir Belediyesi",
    description: "Eski sanayi alanının yeşil kent parkına dönüşümü.",
    longDescription:
      "Kentsel Dönüşüm Parkı, Eskişehir'de terk edilmiş bir sanayi alanının yeşil bir kent parkına dönüştürülmesini içeren bir peyzaj mimarlığı projesidir. Fitoremediasyon tekniğiyle toprak ıslahı yapılmış, yerli bitki türleriyle zenginleştirilmiş ekolojik bir habitat oluşturulmuştur. Yürüyüş ve bisiklet yolları, çocuk oyun alanları ve topluluk bahçeleriyle kentlilere çok yönlü bir rekreasyon alanı sunmaktadır.",
    sustainability: ["Fitoremediasyon", "Yerli Bitki Türleri", "Yağmur Bahçesi", "Biyolojik Çeşitlilik"],
    features: ["Yürüyüş Yolları", "Topluluk Bahçesi", "Amfi Tiyatro", "Gölet"],
    images: ["/placeholder-project.jpg"],
    color: "#40916C",
  },
  {
    id: 7,
    slug: "bambu-restoran",
    title: "Bambu Restoran",
    category: "İç Mekan",
    location: "Antalya, Türkiye",
    year: "2023",
    area: "650 m²",
    client: "Bambu Gastronomi",
    description: "Doğal malzemelerle tasarlanmış organik restoran iç mekanı.",
    longDescription:
      "Bambu Restoran, Antalya'da doğal malzemeler ve organik formlarla tasarlanmış bir iç mekan projesidir. Bambu, geri dönüştürülmüş ahşap ve doğal taş kullanılarak yaratılan mekan, farm-to-table konseptini mimari dile yansıtmaktadır. Açık mutfak düzeni ve iç bahçe uygulamasıyla misafirlere doğayla iç içe bir yemek deneyimi sunmaktadır.",
    sustainability: ["Geri Dönüşüm Malzeme", "Doğal Havalandırma", "LED Aydınlatma", "Kompost Sistemi"],
    features: ["Açık Mutfak", "İç Bahçe", "Teras", "Özel Yemek Odası"],
    images: ["/placeholder-project.jpg"],
    color: "#52B788",
  },
  {
    id: 8,
    slug: "gunes-enerjisi-ciftligi",
    title: "Güneş Enerjisi Çiftliği",
    category: "Ticari",
    location: "Konya, Türkiye",
    year: "2024",
    area: "5.200 m²",
    client: "Yeşil Enerji A.Ş.",
    description: "Sürdürülebilir tarım ve enerji üretimini birleştiren agrivoltaik tesis.",
    longDescription:
      "Güneş Enerjisi Çiftliği, Konya ovasında tarım ve enerji üretimini birleştiren yenilikçi bir agrivoltaik tesis projesidir. Güneş panellerinin altında organik tarım yapılabilen bu hibrit model, arazi kullanımını optimize eder. İdari bina ve eğitim merkezi, tamamen off-grid olarak tasarlanmış olup enerji bağımsızlığı sağlamaktadır.",
    sustainability: ["Agrivoltaik", "Off-Grid", "Organik Tarım", "Enerji Depolama"],
    features: ["Eğitim Merkezi", "Gözlem Terası", "Organik Sera", "Enerji İzleme Sistemi"],
    images: ["/placeholder-project.jpg"],
    color: "#8FBC8F",
  },
];

export const categories = ["Tümü", "Konut", "Ticari", "Kamu", "Eğitim", "Turizm", "Peyzaj", "İç Mekan"];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): { prev: Project | null; next: Project | null } {
  const index = projects.findIndex((p) => p.slug === slug);
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}
