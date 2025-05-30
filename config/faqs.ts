export const FAQS_EN = [
  {
    question: "What is this landing page template?",
    answer:
      "This is a free, open-source landing page template designed to help you quickly create professional-looking landing pages. It comes with modern design elements, responsive layouts, and easy customization options.",
  },
  {
    question: "Is it really free to use?",
    answer:
      "Yes, absolutely! This template is completely free and open-source. You can use it for both personal and commercial projects without any licensing fees.",
  },
  {
    question: "Do I need coding knowledge to use this?",
    answer:
      "While basic familiarity with web technologies is helpful, you don't need extensive coding knowledge. The template is designed to be easily customizable through simple configuration files.",
  },
  {
    question: "Can I use this for my business?",
    answer:
      "Yes! This template is perfect for businesses looking to create a professional online presence. You can customize it to match your brand and add your own content.",
  },
  {
    question: "What features are included?",
    answer:
      "The template includes responsive design, dark mode support, SEO optimization, customizable sections, multi-language support, and easy deployment options.",
  },
];

export const FAQS_ID = [
  {
    question: "Apa itu template landing page ini?",
    answer:
      "Ini adalah template landing page gratis dan open-source yang dirancang untuk membantu Anda membuat landing page profesional dengan cepat. Dilengkapi dengan elemen desain modern, tata letak responsif, dan opsi kustomisasi yang mudah.",
  },
  {
    question: "Apakah benar-benar gratis untuk digunakan?",
    answer:
      "Ya, tentu saja! Template ini sepenuhnya gratis dan open-source. Anda dapat menggunakannya untuk proyek pribadi maupun komersial tanpa biaya lisensi.",
  },
  {
    question: "Apakah saya perlu pengetahuan coding untuk menggunakannya?",
    answer:
      "Meskipun pengetahuan dasar tentang teknologi web membantu, Anda tidak memerlukan pengetahuan coding yang mendalam. Template ini dirancang agar mudah dikustomisasi melalui file konfigurasi sederhana.",
  },
  {
    question: "Bisakah saya menggunakan ini untuk bisnis saya?",
    answer:
      "Ya! Template ini sangat cocok untuk bisnis yang ingin membangun kehadiran online profesional. Anda dapat mengkustomisasinya sesuai dengan brand Anda dan menambahkan konten Anda sendiri.",
  },
  {
    question: "Fitur apa saja yang tersedia?",
    answer:
      "Template ini mencakup desain responsif, dukungan mode gelap, optimasi SEO, bagian yang dapat dikustomisasi, dukungan multi-bahasa, dan opsi deployment yang mudah.",
  },
];

export type FAQSCollection = {
  [key: string]: typeof FAQS_EN;
};

export const ALL_FAQS: FAQSCollection = {
  FAQS_EN,
  FAQS_ID
};