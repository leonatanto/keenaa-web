import { SiteConfig } from "@/types/siteConfig";
import { BsInstagram, BsTiktok } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiShopee } from "react-icons/si";

const SHOPEE_URL = 'https://shopee.co.id/keenaa.id' // Update with actual Shopee URL
const INSTAGRAM_URL = 'https://instagram.com/keenaa.id' // Update with actual Instagram URL
const TIKTOK_URL = 'https://tiktok.com/@keenaa.id' // Update with actual TikTok URL
const EMAIL = 'hello@keenaa.id' // Update with actual email

const baseSiteConfig = {
  name: "Keenaa",
  description:
    "Keenaa Baby Carrier - Gendongan bayi ergonomis premium dengan kualitas terbaik. Nyaman untuk bayi dan orang tua, aman digunakan dari newborn hingga toddler. Dibuat dengan material premium dan desain modern.",
  url: "https://keenaa.id",
  ogImage: "https://keenaa.id/og.png",
  metadataBase: '/',
  keywords: [
    "gendongan bayi",
    "baby carrier",
    "gendongan ergonomis",
    "gendongan bayi premium",
    "gendongan bayi modern",
    "gendongan bayi newborn",
    "gendongan bayi toddler",
    "baby carrier indonesia",
    "gendongan bayi aman",
    "gendongan bayi nyaman",
    "keenaa baby carrier",
    "gendongan bayi keenaa"
  ],
  authors: [
    {
      name: "Keenaa",
      url: "https://keenaa.id",
      twitter: INSTAGRAM_URL,
    }
  ],
  creator: '@keenaa.id',
  themeColors: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  nextThemeColor: 'light',
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/logo.png",
  },
  headerLinks: [
    { name: 'shopee', href: SHOPEE_URL, icon: SiShopee },
    { name: 'instagram', href: INSTAGRAM_URL, icon: BsInstagram },
    { name: 'tiktok', href: TIKTOK_URL, icon: BsTiktok }
  ],
  footerLinks: [
    { name: 'email', href: `mailto:${EMAIL}`, icon: MdEmail },
    { name: 'shopee', href: SHOPEE_URL, icon: SiShopee },
    { name: 'instagram', href: INSTAGRAM_URL, icon: BsInstagram },
    { name: 'tiktok', href: TIKTOK_URL, icon: BsTiktok }
  ],
  footerProducts: [
    { url: '/products/newborn', name: 'Gendongan Newborn' },
    { url: '/products/toddler', name: 'Gendongan Toddler' },
    { url: '/guide', name: 'Panduan Penggunaan' },
    { url: '/about', name: 'Tentang Keenaa' },
    { url: '/contact', name: 'Hubungi Kami' },
  ]
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    images: [
      {
        url: `${baseSiteConfig.url}/og.png`,
        width: 1200,
        height: 630,
        alt: "Keenaa Baby Carrier - Gendongan Bayi Premium Indonesia"
      }
    ],
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    site: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
}
