"use client";

import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import posthog from "posthog-js";

const CTA = () => {
  const handleClick = () => {
    posthog.capture("cta_clicked", {
      location: "main_cta",
    });
  };

  return (
    <Link
      href="/launch"
      className="w-full max-w-[550px] mx-auto flex items-center gap-2 justify-between bg-white rounded-full border border-border py-1 pr-1 pl-5 cursor-text hover:border-primary transition-all h-[54px]"
      onClick={handleClick}
    >
      <p className="hidden lg:block font-mono">
        <span className="text-muted-foreground/50">https://</span>
        <span className="text-primary/60">github.com/org/repo/document.md</span>
      </p>
      <p className="font-mono lg:hidden">
        <span className="text-primary/60">Enter your markdown link ...</span>
      </p>
      <div className="pointer-events-none bg-border rounded-full p-3 w-fit">
        <ArrowRightIcon className="size-5" />
      </div>
    </Link>
  );
};

export default CTA;
