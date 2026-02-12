"use client";

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import posthog from "posthog-js";
import { Input } from "./ui/input";
import { useState } from "react";

const CTA = () => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    posthog.capture("cta_clicked", {
      location: "main_cta",
      repository: value,
    });

    const url = `https://app.get-colibri.com/?room_id=${value.replace("https://", "")}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative w-full max-w-[550px] mx-auto h-[54px]">
      <Input
        value={value}
        className="ring-0 w-full h-full bg-white rounded-full border border-border py-1 pr-1 pl-5 cursor-text hover:border-primary transition-all placeholder:text-muted-foreground text-black tracking-wide placeholder:text-[16px] text-[16px]! placeholder:tracking-wide"
        placeholder="https://github.com/org/repo/document.md"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
        onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
          if (event.key === "Enter") {
            handleClick();
          }
        }}
      />
      <div onClick={handleClick} className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-border rounded-full p-3 w-fit cursor-pointer hover:bg-primary hover:text-white transition-all">
        <ArrowRightIcon className="size-5" />
      </div>
    </div>
  );
};

export default CTA;
