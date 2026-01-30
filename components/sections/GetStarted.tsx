import CTA from "../CTA";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const data = {
  title: "Get Started",
  description: <>No setup. No configuration. <span className="font-semibold text-primary">Just tune it.</span></>,
  urls: [
    [
      "https://",
      "g",
      "ithub.com/org/repo/document.md",
    ],
    [
      "https://",
      "tune",
      "ithub.com/org/repo/document.md",
    ],
  ]
};

const GetStarted = () => {
  return (
    <TooltipProvider>
      <div className="w-full flex flex-col gap-4 items-center mt-32">
        <h2 className="text-4xl font-semibold">{data.title}</h2>
        <h3 className="text-lg font-regular text-muted-foreground max-w-[450px] mx-auto text-center">{data.description}</h3>
        <div className="w-full flex flex-col gap-0.5 items-end max-w-[508px] mx-auto font-mono text-xl pr-4 pt-12">
          {data.urls.map((url) => (
            <div key={url[0]}>
              {url.map((section) => (
                section === "g" ? (
                  <Tooltip key={section} open={true}>
                    <TooltipTrigger asChild>
                      <span className="text-pink-900 bg-pink-500/20 px-0.5 cursor-help">{section}</span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-[16px]">Tune the Github link!</p>
                    </TooltipContent>
                  </Tooltip>
                ) : (
                  <span key={section} className={section === "tune" ? "text-teal-900 bg-teal-500/20 px-0.5" : "text-muted-foreground"}>{section}</span>
                )
              ))}
            </div>
          ))}
        </div>
        <div className="w-full flex items-center gap-4 max-w-[450px] mx-auto my-8">
          <div className="flex-1 h-px bg-border" />
          <span className="text-sm text-muted-foreground">or</span>
          <div className="flex-1 h-px bg-border" />
        </div>
        <CTA />
      </div>
    </TooltipProvider>
  );
};

export default GetStarted;