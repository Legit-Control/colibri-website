"use client";

import { Button, ButtonProps } from "../ui/button";
import posthog from "posthog-js";

const data = {
  title: "Pricing",
  description: (
    <>
      <span className="font-semibold text-primary">
        You can start Colibri for free on public repos.
      </span>{" "}
      <br />
      For open source project it stays free for ever. Once a repo is private the plan needs to be upgraded.
    </>
  ),
  plans: [
    {
      name: "Open Source",
      for: "For public repos only.",
      features: [
        "Unlimited anonymous editors",
        "Unlimited history",
        "Unlimited annotations",
        "Realtime collaboration",
        "PR's by Colibri",
        "MDX support (coming soon)",
      ],
      price: "$ FREE",
      priceText: "forever",
      cta: "Try now",
      cta_type: "outline"
    },
    {
      name: "Private",
      for: "For private repos",
      features: [
        "Unlimited anonymous editors",
        "Unlimited history",
        "Realtime collaboration",
        "2 private files in a repo",
        "20 annotations per file",
        "up to 3 teammates",

      ],
      price: "$0",
      priceText: "per month",
      cta: "Get started",
      cta_type: "outline"
    },
    {
      name: "Team",
      badge: "Most popular",
      for: "Coming soon (for private and public repos)",
      features: [
        "Unlimited anonymous editors",
        "Unlimited history",
        "Unlimited private files",
        "Unlimited annotations per file",
        "Realtime collaboration",
        "Custom Colibri ACCs (coming soon)",
        "MDX support (coming soon)",
      ],
      price: "$XX",
      priceText: "per month per seat",
      cta: "Coming soon",
      cta_type: "outline"
    },
  ],
};

const Pricing = () => {
  const handlePlanClick = (planName: string, price: string) => {
    posthog.capture("pricing_plan_clicked", {
      plan_name: planName.toLowerCase().replace(" ", "_"),
      plan_price: price,
    });
  };

  return (
    <div className="w-full flex flex-col gap-4 mt-32">
      <h2 className="text-4xl font-semibold">{data.title}</h2>
      <h3 className="text-lg font-regular text-muted-foreground max-w-[480px] w-full mr-auto">{data.description}</h3>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
        {data.plans.map((plan) => (
          <div key={plan.name} className="flex flex-col gap-2 bg-white rounded-2xl p-5">
            <div>
              <h4 className="text-md font-semibold">{plan.name}</h4>
              <p className="text-sm font-regular text-muted-foreground leading-[0.8rem] pt-2">{plan.for}</p>
            </div>
            <ul className="list-disc list-inside pt-4 space-y-1 text-muted-foreground h-[200px]">
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <div className="flex items-end gap-4">
              <h4 className="text-3xl font-semibold pt-[15px]">{plan.price}</h4>
              <p className="text-sm font-regular text-muted-foreground leading-[0.8rem] pb-1.5">{plan.priceText}</p>
            </div>
            <Button
              variant={plan.cta_type as ButtonProps["variant"]}
              size="sm"
              className="w-full mt-4"
              onClick={() => handlePlanClick(plan.name, plan.price)}
            >
              {plan.cta}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
