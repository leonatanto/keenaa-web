"use client";
import HeaderLinks from "@/components/header/HeaderLinks";
import { LangSwitcher } from "@/components/header/LangSwitcher";
import { siteConfig } from "@/config/site";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { ThemedButton } from "../ThemedButton";

const scrollLinks = [
  { label: "SHOP", href: "#Products" },
  { label: "BENEFITS", href: "#Benefits" },
  { label: "GUIDE", href: "#Guide" },
  { label: "REVIEWS", href: "#Reviews" },
];

const navLinks = [
  { label: "CATALOG", href: "catalog" },
];

const Header = () => {
  const params = useParams();
  const pathname = usePathname();
  const lang = (params?.lang as string) || "en";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md py-4">
      <nav className="relative z-50 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Left section */}
        <div className="flex items-center md:gap-x-12 flex-1">
          {isHome ? (
            <a
              href="#top"
              onClick={(e) => handleScroll(e, "#top")}
              className="flex items-center space-x-2 font-bold"
            >
              <Image
                alt="Logo"
                src="/baby-icon.png"
                className="w-10 h-10"
                width={40}
                height={40}
              />
              <span className="text-gray-950 dark:text-gray-300 hidden md:block text-xl">
                {siteConfig.name}
              </span>
            </a>
          ) : (
            <Link
              href={`/${lang}`}
              className="flex items-center space-x-2 font-bold"
            >
              <Image
                alt="Logo"
                src="/baby-icon.png"
                className="w-10 h-10"
                width={40}
                height={40}
              />
              <span className="text-gray-950 dark:text-gray-300 hidden md:block text-xl">
                {siteConfig.name}
              </span>
            </Link>
          )}
        </div>

        {/* Center section - Navigation */}
        <ul className="hidden md:flex items-center justify-center gap-8 flex-1">
          {mounted && scrollLinks.map((link) => (
            <li key={link.label}>
              {isHome ? (
                <a
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="tracking-wide transition-colors duration-200 font-medium hover:text-primary"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  href={`/${lang}#${link.href.replace("#", "")}`}
                  className="tracking-wide transition-colors duration-200 font-medium hover:text-primary"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
          {mounted && navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={`/${lang}/${link.href}`}
                className="tracking-wide transition-colors duration-200 font-medium hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right section */}
        <div className="hidden md:flex items-center justify-end gap-x-6 flex-1">
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
          <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg rounded-b-lg">
            <div className="px-4 py-6">
              <ul className="space-y-4">
                {scrollLinks.map((link) => (
                  <li key={link.label}>
                    {isHome ? (
                      <a
                        href={link.href}
                        onClick={(e) => handleScroll(e, link.href)}
                        className="block text-lg font-medium hover:text-primary"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={`/${lang}#${link.href.replace("#", "")}`}
                        className="block text-lg font-medium hover:text-primary"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={`/${lang}/${link.href}`}
                      className="block text-lg font-medium hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center gap-4">
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
