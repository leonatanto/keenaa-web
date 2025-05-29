import { SiteConfig } from "@/types/siteConfig";
import { BsInstagram, BsTiktok } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiShopee } from "react-icons/si";

const OPEN_SOURCE_URL = 'https://github.com/weijunext/landing-page-boilerplate'

const baseSiteConfig = {
  name: "Keenaa",
  description:
    "A free, open-source, and powerful landing page boilerplate, ideal for various projects, enabling you to create a landing page in under an hour.",
  url: "https://landingpage.weijunext.com",
  ogImage: "https://landingpage.weijunext.com/og.png",
  metadataBase: '/',
  keywords: ["landing page boilerplate", "landing page template", "awesome landing page", "next.js landing page"],
  authors: [
    {
      name: "weijunext",
      url: "https://weijunext.com",
      twitter: 'https://twitter.com/weijunext',
    }
  ],
  creator: '@keenaa',
  openSourceURL: 'https://github.com/weijunext/landing-page-boilerplate',
  themeColors: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  nextThemeColor: 'light', // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/logo.png",
  },
  headerLinks: [
    { name: 'shopee', href: OPEN_SOURCE_URL, icon: SiShopee }, //TODO LEON: change this URL
    { name: 'instagram', href: "https://twitter.com/weijunext", icon: BsInstagram }, //TODO LEON: change this URL
    { name: 'tiktok', href: "https://www.buymeacoffee.com/weijunext", icon: BsTiktok } //TODO LEON: change this URL
  ],
  footerLinks: [
    { name: 'email', href: "mailto:weijunext@gmail.com", icon: MdEmail }, //TODO LEON: change this URL
    { name: 'shopee', href: OPEN_SOURCE_URL, icon: SiShopee }, //TODO LEON: change this URL
    { name: 'instagram', href: "https://twitter.com/weijunext", icon: BsInstagram }, //TODO LEON: change this URL
    { name: 'tiktok', href: "https://www.buymeacoffee.com/weijunext", icon: BsTiktok } //TODO LEON: change this URL

  ],
  footerProducts: [
    { url: 'https://nexty.dev/', name: 'SaaS Starter' },
    { url: 'https://landingpage.weijunext.com/', name: 'Landing Page Boilerplate' },
    { url: 'https://weijunext.com/', name: 'J实验室' },
    { url: 'https://nextjscn.org/', name: 'Next.js 中文文档' },
    { url: 'https://github.com/weijunext/indie-hacker-tools', name: 'Indie Hacker Tools' },
  ]
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    images: [`${baseSiteConfig.url}/og.png`],
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
