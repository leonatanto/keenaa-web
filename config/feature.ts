import { MagnetIcon } from "lucide-react";
import { BsGithub } from "react-icons/bs";
import { FaToolbox } from "react-icons/fa";
import { FaEarthAsia, FaMobileScreenButton } from "react-icons/fa6";
import { MdCloudUpload } from "react-icons/md";

export const FEATURES_EN = [
  {
    title: "Open Source Advantage",
    content: "Completely free with a wealth of customization options.",
    icon: BsGithub,
  },
  {
    title: "Responsive Design",
    content:
      "Templates meticulously designed to ensure optimal display on any device.",
    icon: FaMobileScreenButton,
  },
  {
    title: "Easy Customization",
    content:
      "Effortlessly change colors, fonts, and layouts without any coding knowledge.",
    icon: FaToolbox,
  },
  {
    title: "SEO Optimized",
    content:
      "Templates built with search engine optimization in mind to enhance your website's discoverability.",
    icon: MagnetIcon,
  },
  {
    title: "One-Click Deployment",
    content:
      "Tightly integrated with leading web hosting services for instant website publishing.",
    icon: MdCloudUpload,
  },
  {
    title: "Globalization Support",
    content:
      "Supports multiple languages, making your website attractive to a global audience.",
    icon: FaEarthAsia,
  },
];

export const FEATURES_ID = [
  {
    title: "Keunggulan Open Source",
    content: "Gratis sepenuhnya dengan banyak pilihan kustomisasi.",
    icon: BsGithub,
  },
  {
    title: "Desain Responsif",
    content:
      "Template dirancang dengan teliti untuk memastikan tampilan optimal di semua perangkat.",
    icon: FaMobileScreenButton,
  },
  {
    title: "Kustomisasi Mudah",
    content:
      "Ubah warna, font, dan tata letak dengan mudah tanpa pengetahuan coding.",
    icon: FaToolbox,
  },
  {
    title: "Optimasi SEO",
    content:
      "Template dibangun dengan memperhatikan optimasi mesin pencari untuk meningkatkan visibilitas website Anda.",
    icon: MagnetIcon,
  },
  {
    title: "Deployment Satu Klik",
    content:
      "Terintegrasi dengan layanan hosting web terkemuka untuk publikasi website instan.",
    icon: MdCloudUpload,
  },
  {
    title: "Dukungan Globalisasi",
    content:
      "Mendukung berbagai bahasa, membuat website Anda menarik bagi audiens global.",
    icon: FaEarthAsia,
  },
];

export type FeaturesCollection = {
  [key: string]: typeof FEATURES_EN;
};

export const ALL_FEATURES: FeaturesCollection = {
  FEATURES_EN,
  FEATURES_ID
};