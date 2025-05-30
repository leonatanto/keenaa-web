"use client";
import HeaderLinks from "@/components/header/HeaderLinks";
import { LangSwitcher } from "@/components/header/LangSwitcher";
import { siteConfig } from "@/config/site";
import { getDictionary } from "@/lib/i18n";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { ThemedButton } from "../ThemedButton";

const Header = () => {
  const params = useParams();
  const pathname = usePathname();
  const lang = (params?.lang as string) || "en";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [translations, setTranslations] = useState({
    Navigation: {
      shop: "SHOP",
      benefits: "BENEFITS",
      guide: "GUIDE",
      reviews: "REVIEWS",
      catalog: "CATALOG"
    }
  });

  useEffect(() => {
    setMounted(true);
    const loadTranslations = async () => {
      try {
        const dict = await getDictionary(lang);
        if (dict.Navigation) {
          setTranslations({
            Navigation: {
              shop: dict.Navigation.shop || "SHOP",
              benefits: dict.Navigation.benefits || "BENEFITS",
              guide: dict.Navigation.guide || "GUIDE",
              reviews: dict.Navigation.reviews || "REVIEWS",
              catalog: dict.Navigation.catalog || "CATALOG"
            }
          });
        }
      } catch (error) {
        console.error('Error loading translations:', error);
      }
    };
    loadTranslations();
  }, [lang]);

  const scrollLinks = [
    { label: translations.Navigation.shop, href: "#Products" },
    { label: translations.Navigation.benefits, href: "#Benefits" },
    { label: translations.Navigation.guide, href: "#Guide" },
    { label: translations.Navigation.reviews, href: "#Reviews" },
  ];

  const navLinks = [
    { label: translations.Navigation.catalog, href: "catalog" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === "#top") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } else {
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
    setIsMenuOpen(false);
  };

  // Always show all navigation items, but only make scroll links clickable on home page
  const isHome = pathname === `/${lang}` || pathname === "/";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm py-5">
      <nav className="relative z-50 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Left section */}
        <div className="flex items-center md:gap-x-12 flex-1">
          {isHome ? (
            <a
              href="#top"
              onClick={(e) => handleScroll(e, "#top")}
              className="flex items-center space-x-3"
            >
              <Image
                alt="Logo"
                src="/baby-icon.png"
                className="w-8 h-8"
                width={32}
                height={32}
              />
              <span className="text-gray-900 dark:text-gray-100 hidden md:block text-base font-medium tracking-normal">
                {siteConfig.name}
              </span>
            </a>
          ) : (
            <Link
              href={`/${lang}`}
              className="flex items-center space-x-3"
            >
              <Image
                alt="Logo"
                src="/baby-icon.png"
                className="w-8 h-8"
                width={32}
                height={32}
              />
              <span className="text-gray-900 dark:text-gray-100 hidden md:block text-base font-medium tracking-normal">
                {siteConfig.name}
              </span>
            </Link>
          )}
        </div>

        {/* Center section - Navigation */}
        <ul className="hidden md:flex items-center justify-center gap-12 flex-1">
          {mounted && scrollLinks.map((link) => (
            <li key={link.label} className="relative group">
              {isHome ? (
                <a
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-[13px] tracking-normal font-medium text-gray-800 hover:text-black dark:text-gray-200 dark:hover:text-white transition-colors duration-200"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-black dark:bg-white origin-left transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                </a>
              ) : (
                <Link
                  href={`/${lang}#${link.href.replace("#", "")}`}
                  className="text-[13px] tracking-normal font-medium text-gray-800 hover:text-black dark:text-gray-200 dark:hover:text-white transition-colors duration-200"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-black dark:bg-white origin-left transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                </Link>
              )}
            </li>
          ))}
          {mounted && navLinks.map((link) => (
            <li key={link.label} className="relative group">
              <Link
                href={`/${lang}/${link.href}`}
                className="text-[13px] tracking-normal font-medium text-gray-800 hover:text-black dark:text-gray-200 dark:hover:text-white transition-colors duration-200"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-black dark:bg-white origin-left transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Right section */}
        <div className="hidden md:flex items-center justify-end gap-x-8 flex-1">
          <HeaderLinks />
          <ThemedButton />
          <LangSwitcher />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            title={isMenuOpen ? "Close Menu" : "Open Menu"}
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <CgClose size={24} /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && mounted && (
          <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg">
            <div className="px-6 py-8">
              <ul className="space-y-6">
                {scrollLinks.map((link) => (
                  <li key={link.label} className="relative group">
                    {isHome ? (
                      <a
                        href={link.href}
                        onClick={(e) => handleScroll(e, link.href)}
                        className="block text-[13px] tracking-normal font-medium text-gray-800 hover:text-black dark:text-gray-200 dark:hover:text-white"
                      >
                        {link.label}
                        <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-black dark:bg-white origin-left transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                      </a>
                    ) : (
                      <Link
                        href={`/${lang}#${link.href.replace("#", "")}`}
                        className="block text-[13px] tracking-normal font-medium text-gray-800 hover:text-black dark:text-gray-200 dark:hover:text-white"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                        <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-black dark:bg-white origin-left transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                      </Link>
                    )}
                  </li>
                ))}
                {navLinks.map((link) => (
                  <li key={link.label} className="relative group">
                    <Link
                      href={`/${lang}/${link.href}`}
                      className="block text-[13px] tracking-normal font-medium text-gray-800 hover:text-black dark:text-gray-200 dark:hover:text-white"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                      <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-black dark:bg-white origin-left transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-center gap-6">
                <HeaderLinks />
                <ThemedButton />
                <LangSwitcher />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
