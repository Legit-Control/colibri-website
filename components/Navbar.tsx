"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";
import posthog from "posthog-js";

// Scroll offset in pixels - adjust this to tune the scroll position
// Positive values: scroll stops before the target (e.g., 64 for navbar height)
// Negative values: scroll goes past the target (e.g., -20 to scroll 20px further)
const SCROLL_OFFSET = 128;

const navItems = [
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "Pricing",
    href: "#pricing",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    // Check initial scroll position
    handleScroll();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, label?: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - SCROLL_OFFSET;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    // Track section navigation
    if (label) {
      posthog.capture("navbar_section_clicked", {
        section: label.toLowerCase(),
        target_href: href,
      });
    }
  };

  const handleGetStartedClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    posthog.capture("navbar_get_started_clicked");
    handleNavClick(e, "#get-started");
  };

  return (
    <div
      className={
        [
          "fixed top-0 left-0 right-0 z-50 h-16 w-full flex justify-between items-center px-4 bg-background/90 backdrop-blur-sm border-b transition-colors duration-300",
          isScrolled ? "border-border" : "border-transparent"
        ].join(" ")
      }
      id="colibri-navbar"
    >
      <Link href="/" className="flex items-center gap-2" onClick={(e) => handleNavClick(e, "#top")}>
        <Image src="/colibri_logo.svg" alt="Colibri" width={32} height={32} />
        <span className="text-lg font-semibold">Colibri</span>
      </Link>
      <div className="hidden md:block">
        {navItems.map((item) => (
          <Link
            href={item.href}
            key={item.href}
            onClick={(e) => handleNavClick(e, item.href, item.label)}
          >
            <Button variant="ghost" size="sm">
              {item.label}
            </Button>
          </Link>
        ))}
      </div>
      <div>
        <Link href="#get-started" onClick={handleGetStartedClick}>
          <Button size="sm">Get Started</Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
