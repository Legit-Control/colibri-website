"use client";

import { Button } from "./ui/button";
import posthog from "posthog-js";

const navItems = [
  {
    label: "Features",
    href: "/features",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Get Started",
    href: "/get-started",
  },
];

const Footer = () => {
  const handleFooterLinkClick = (label: string) => {
    posthog.capture("footer_link_clicked", {
      link_label: label.toLowerCase().replace(" ", "_"),
    });
  };

  const handleEmailClick = () => {
    posthog.capture("footer_email_clicked");
  };

  return (
    <div className="w-full flex justify-between items-center px-4 py-2">
      <a
        href="mailto:hello@colibri.com"
        className="text-sm text-muted-foreground hover:text-primary transition-colors"
        onClick={handleEmailClick}
      >
        hello@colibri.com
      </a>
      <div>
        {navItems.map((item) => (
          <Button
            key={item.href}
            variant="ghost"
            size="sm"
            className="text-sm text-muted-foreground"
            onClick={() => handleFooterLinkClick(item.label)}
          >
            {item.label}
          </Button>
        ))}
      </div>
      <span className="text-sm text-muted-foreground">&copy; 2026 Colibri</span>
    </div>
  );
};

export default Footer;
